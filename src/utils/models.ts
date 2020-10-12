interface User {
  name?: string;
  phone?: string;
  password: string;
  email: string;
}
interface Response {
  response: any;
}
interface Data {
  data: any;
}
interface Property {
  type: string;
  size: string;
  noOfRooms?: any;
  reason: string;
  location: any;
  images: any[];
  bargain: boolean;
  price: number;
}
export { User, Response, Data, Property };
