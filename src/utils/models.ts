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
  extraComment: string;
  location: any;
  images: any[];
  ownerId: string;
  state: string;
  landmark: string;
  price: any;
  furnishing: string;
  bathrooms: string;
  condition: string;
  parkingSpace: string;
  propertyId: string;
}

export { User, Response, Data, Property };
