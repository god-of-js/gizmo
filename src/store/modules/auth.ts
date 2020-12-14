import {
  Module,
  VuexModule,
  getModule,
  Action
} from "vuex-module-decorators";
import router from "../../router";
import store from "../index";
import { Api } from "@/api";
import { User, Response, Data } from "@/utils/models.ts";
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
        notify.success(response.data.message, "Success", "topRight");
        router.push(
          `/auth/verify-number/${response.data.verificationDetails.token}`
        );
      })
      .catch((err: Response) => {
        notify.error(err.response.data.message, "Error", "topRight");
      });
  }
}
export const AuthModule = getModule(Auth);
