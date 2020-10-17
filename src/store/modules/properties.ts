import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import store from "../index";
import { Api } from "@/api";
interface Data {
  images: string[];
  landmark: string;
  location: string;
  noOfRooms: number;
  ownerId: string;
  price: number;
  size: string;
  state: string;
  type: string;
  __v: number;
  _id: string;
}
@Module({
  namespaced: true,
  name: "properties",
  store: store
})
export default class Properties extends VuexModule {
  sellerProperties: Data[] = [];
  @Mutation
  setSellerProperties(data: Data[]) {
    this.sellerProperties = data;
  }
  @Action
  async getSellerProperties() {
    await Api()
      .get(
        "/api/v1/property/fetch-properties",
        this.context.rootState.user.user._id
      )
      .then(response => {
        this.setSellerProperties(response.data.data);
        console.log(response.data.data);
      })
      .catch(err => {
        console.log(err.response);
        console.log(err);
      });
  }
}
