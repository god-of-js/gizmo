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
  @Mutation
  setSellerProperties(data: Property[]) {
    this.sellerProperties = data;
  }
  @Mutation
  setSellerProperty(data: Property[]) {
    this.property = data;
  }
  @Action
  getSellerProperties() {
    Api()
      .get(
        "/api/v1/property/fetch-properties",
        this.context.rootState.user.user._id
      )
      .then(response => {
        this.setSellerProperties(response.data.data);
      })
      .catch(err => {
        throw err
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
        throw err
      });
  }
}
