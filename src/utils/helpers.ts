
export const imgCheck = (file: any ): boolean =>  {
    console.log(file)
    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      return false;
    } else {
      return true;
    }
  };