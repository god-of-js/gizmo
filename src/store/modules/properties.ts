import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import store from "../index";
import { Api } from "@/api";
import { Property } from "@/utils/models";
@Module({
  namespaced: true,
  name: "properties",
  store: store
})
export default class Properties extends VuexModule {
  sellerProperties: Property[] = [];
  property: Property[] = [];
  universalProperty: Property[] = [];
  propertyOwner: object = {};
  @Mutation
  setSellerProperties(data: Property[]) {
    this.sellerProperties = data;
  }
  @Mutation
  setSellerProperty(data: Property[]) {
    this.property = data;
  }
  @Mutation
  setOwner(data: Property[]) {
    this.propertyOwner = data;
  }
  @Mutation
  setUniversalProperties(data: Property[]) {
    this.universalProperty = data;
  }
  @Action
  getSellerProperties(id: string) {
    Api()
      .get(
        "/api/v1/property/fetch-properties",
        !id ? this.context.rootState.user.user._id : id
      )
      .then(response => {
        this.setSellerProperties(response.data.data);
      })
      .catch(err => {
        throw err;
      });
  }
  @Action
  getAllProperties() {
    Api()
      .get("/api/v1/property/fetch-all-properties/0")
      .then(response => {
        console.log(response);
        this.setUniversalProperties(response.data.data);
      })
      .catch(err => {
        throw err;
      });
  }
  @Action
  getPropertyOwner(id: string) {
    Api()
      .get("/api/v1/users/get-user/" + id)
      .then(response => {
        console.log(response);
        this.setOwner(response.data.data);
      })
      .catch(err => {
        throw err;
      });
  }
  @Action
  getProperty(id: string) {
    Api()
      .get("/api/v1/property/fetch-property/" + id)
      .then(response => {
        this.setSellerProperty(response.data.data);
      })
      .catch(err => {
        throw err;
      });
  }
}
