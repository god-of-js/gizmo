 const imgCheck = (file: any): boolean => {
  if (file.type !== "image/jpeg" && file.type !== "image/png") {
    return false;
  } else {
    return true;
  }
};
const format = (str: any) => {
  str = str.toLowerCase();
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
export {
  format,
  imgCheck
}