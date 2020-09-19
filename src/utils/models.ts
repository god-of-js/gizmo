interface User {
    name: string;
    phone: string;
    password: string;
    email: string;
  }
  interface Response {
      response: object
  }
  interface Data {
      data: any
  }
  export {
      User,
      Response,
      Data
  }