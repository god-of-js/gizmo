import axios from "axios";
const upload = (formData: any) => {
  console.log(formData);
  axios
    .post(process.env.VUE_APP_CLOUDINARY_UPLOAD_URL, formData)
    .then(response => {
      return response.data.url;
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};
export { upload };
