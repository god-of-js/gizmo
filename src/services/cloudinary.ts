import axios from "axios";
const upload = (formData: object) =>
  new Promise((resolve, reject) => {
    axios
      .post(process.env.VUE_APP_CLOUDINARY_UPLOAD_URL, formData)
      .then(response => {
        console.log(response.data.url, "ts");
        resolve(response.data.url);
      })
      .catch(err => {
        console.log(err.data);
        reject(err);
      });
  });
export { upload };
