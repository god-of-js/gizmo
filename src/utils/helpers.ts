// import axios from 'axios'
// let post: (url: string,data: object, vueApp: object,callback: () => void {}, finish: () => void {} ) => void {
//     axios.post(vueApp.$store.state.app.apiUrl + url, data).then(result => {
//         console.log(result)
//         callback()
//     }).catch(err => {
//         console.log(err.response)
//     })
// }
// const successNot: (msg, vueApp) => void = {
//   let position = {
//     position: "topRight"
//   };
//   vueApp.$toast.success(msg, "Success", position);
// };
// const errorNot: (msg, vueApp) => void = {
//   let error = {
//     position: "topRight"
//   };
//   vueApp.$toast.error(msg, "Error", error);
// };
// const imgCheck = file => {
//   if (!file.type.startsWith("image")) {
//     return false;
//   } else {
//     return true;
//   }
// };
// let Delete: (apiUrl: string, data: object, vueApp: object, callback = () => {}) => void = {
//   let headers = vueApp.$store.state.user.config.headers;
//   vueApp.$axios
//     .delete(vueApp.$store.state.app.apiUrl + apiUrl, {
//       data,
//       headers
//     })
//     .then(result => {
//       vueApp.$openNotification(
//         "Success",
//         result.data.message,
//         "success",
//         vueApp
//       );
//     })
//     .catch(err => {
//       vueApp.$openNotification(
//         "Error",
//         err.response.data.message,
//         "error",
//         vueApp
//       );
//     })
//     .finally(() => {
//       callback();
//     });
// };
// const format: (str: string) => string = {
//   str = str.toLowerCase();
//   str = str.split(" ");
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   str = str.join(" ")
//   return str;
// };
// export default {
//     post,
//     successNot,
//     errorNot
// }
