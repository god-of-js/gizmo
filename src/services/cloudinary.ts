import axios from "axios";
const upload = (formData: object) =>
  new Promise((resolve, reject) => {
    axios
      .post(process.env.VUE_APP_CLOUDINARY_UPLOAD_URL, formData)
      .then(response => {
        resolve(response.data.url);
      })
      .catch(err => {
        reject(err);
      });
  });
export { upload };
