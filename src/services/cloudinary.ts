const cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/dh8mksait/upload`;
import axios from "axios"
const upload = (formData: any) => {
  console.log(formData)
      axios.post(cloudinaryUploadUrl, formData)
            .then(response => {
              return response.data.url
            }).catch(err => {
              console.log(err)
              throw err
            })
}
export {
  upload
}