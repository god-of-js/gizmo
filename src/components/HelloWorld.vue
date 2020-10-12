<template>
  <div class="cl-upload">
    <!-- supply h2 heading -->
    <h2>Upload an Image to Cloudinary</h2>

    <!-- create a form that will not submit to a server but will prevent submit and
    use the upload function as a handle-->
    <form v-on:submit.prevent="upload">
      <!-- bind cloud-name to the input -->
      <label for="cloudname-input">Cloud Name:</label>
      <input
        id="cloudname-input"
        v-model="cloudName"
        placeholder="Enter cloud_name from dashboard"
      />
      <!-- bind preset to the input -->
      <label for="preset-input">Preset:</label>
      <input
        id="preset-input"
        v-model="preset"
        placeholder="Enter preset from upload settings"
      />
      <!-- allow the user to select an image file and when they have selected it call a function 
      to handle this event-->
      <label for="file-input">Upload:</label>
      <input
        id="file-input"
        type="file"
        accept="image/png, image/jpeg"
        @change="handleFileChange($event)"
      />
      <!-- submit button is disabled until a file is selected -->
      <button type="submit" :disabled="filesSelected < 1">Upload</button>
    </form>

  </div>
</template>

<script>
import axios from "axios";
import ProgressBar from "vuejs-progress-bar";
export default {
  name: "CloudinaryUpload",
  components: {
    ProgressBar
  },
  data() {
    const progressBarOptions = {
      text: {
        shadowColor: "black",
        fontSize: 14,
        fontFamily: "Helvetica",
        dynamicPosition: true
      },
      progress: {
        color: "#E8C401",
        backgroundColor: "#000000"
      },
      layout: {
        height: 35,
        width: 140,
        type: "line",
        progressPadding: 0,
        verticalTextAlign: 63
      }
    };
    return {
      results: null,
      errors: [],
      file: null,
      filesSelected: 0,
      cloudName: "",
      preset: "",
      tags: "browser-upload",
      progress: 0,
      showProgress: false,
      options: progressBarOptions,
      fileContents: null,
      formData: null
    };
  },
  methods: {
    // function to handle file info obtained from local
    // file system and set the file state
    handleFileChange: function(event) {
      console.log("handlefilechange", event.target.files);
      //returns an array of files even though multiple not used
      this.file = event.target.files[0];
      this.filesSelected = event.target.files.length;
    },
    prepareFormData: function() {
      this.formData = new FormData();
      this.formData.append("upload_preset", this.preset);
      this.formData.append("tags", this.tags); // Optional - add tag for image admin in Cloudinary
      this.formData.append("file", this.fileContents);
    },
    // function to handle form submit
    upload: function() {
      //no need to look at selected files if there is no cloudname or preset
      if (this.preset.length < 1 || this.cloudName.length < 1) {
        this.errors.push("You must enter a cloud name and preset to upload");
        return;
      }
      // clear errors
      else {
        this.errors = [];
      }
      console.log("upload", this.file.name);
      const reader = new FileReader();
      // attach listener to be called when data from file
      reader.addEventListener(
        "load",
        function() {
          this.fileContents = reader.result;
          this.prepareFormData();
          const cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/${this.cloudName}/upload`;
          const requestObj = {
            url: cloudinaryUploadURL,
            method: "POST",
            data: this.formData,
            onUploadProgress: function(progressEvent) {
              console.log("progress", progressEvent);
              this.progress = Math.round(
                (progressEvent.loaded * 100.0) / progressEvent.total
              );
              console.log(this.progress);
              //bind "this" to access vue state during callback
            }.bind(this)
          };
          //show progress bar at beginning of post
          this.showProgress = true;
          axios(requestObj)
            .then(response => {
              this.results = response.data;
              console.log(this.results);
              console.log("public_id", this.results.public_id);
            })
            .catch(error => {
              this.errors.push(error);
              console.log(this.error);
            })
            .finally(() => {
              setTimeout(
                function() {
                  this.showProgress = false;
                }.bind(this),
                1000
              );
            });
        }.bind(this),
        false
      );
      // call for file read if there is a file
      if (this.file && this.file.name) {
        reader.readAsDataURL(this.file);
      }
    }
  }
};
