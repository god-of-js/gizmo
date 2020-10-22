import {
  Module,
  VuexModule,
  Mutation,
  Action
  // MutationAction
} from "vuex-module-decorators";
import router from "../../router";
import store from "../index";
import { Api } from "@/api";
import { User, Response, Data } from "@/utils/models.ts";
import { getProfile } from "@/utils/cookies";
import { notify } from "@/utils/alert";
const getUser = (): object => {
  let token = getProfile("profile-token");
  if (!token) token = "{}";
  const userObj: any = JSON.parse(token);
  return userObj.data;
};
let gottenUser: User;
@Module({
  namespaced: true,
  name: "user",
  store
})
export default class UserMod extends VuexModule {
  user = gottenUser ?? getUser() ?? {};
  jwt = "";
  @Mutation
  public setUserData(data: any) {
    gottenUser = data.value.data;
    this.jwt = data.value.jwt;
    console.log(this.jwt);
  }
  @Action
  public async getUserData(data: User) {
    Api()
      .post("/api/v1/auth/login", data)
      .then((response: Data) => {
        console.log(response);
        notify.success(response.data.message, "Success", "topRight");
        router.push(`/dashboard`);
      })
      .catch((err: Response) => {
        console.log(err.response);
        notify.error(err.response.data.message, "Error", "topRight");
      });
  }
}
