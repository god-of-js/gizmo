import {
  Module,
  VuexModule,
  getModule,
  // Mutation,
  Action
  // MutationAction
} from "vuex-module-decorators";
import router from "../../router";
import store from "../index";
import { Api } from "@/api";
import { User, Response, Data } from "@/utils/models.ts";
import { setToken } from "@/utils/cookies";
import { notify } from "@/utils/alert";
@Module({
  namespaced: true,
  name: "auth",
  dynamic: true,
  store
})
class Auth extends VuexModule {
  @Action
  public async register(data: User) {
    Api()
      .post("/api/v1/user/register", data)
      .then((response: Data) => {
        console.log(response);
        notify.success(response.data.message, "Success", "topRight");
        router.push(
          `/auth/verify-number/${response.data.verificationDetails.token}`
        );
      })
      .catch((err: Response) => {
        console.log(err.response);
        notify.error(err.response.data.message, "Error", "topRight");
      });
  }
  // @Action
  // public async login(data: User) {
  //   console.log(data);
  //   Api()
  //     .post("/api/v1/auth/login", data)
  //     .then((response: Data) => {
  //       console.log(response);
  //       notify.success(response.data.message, "Success", "topRight");
  //       router.push(`/dashboard`);
  //     })
  //     .catch((err: Response) => {
  //       console.log(err.response);
  //       notify.error(err.response.data.message, "Error", "topRight");
  //     });
  // }
}
export const AuthModule = getModule(Auth);
