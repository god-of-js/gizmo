import {
  Module,
  VuexModule,
  // getModule,
  // Mutation,
  // Action,
  // MutationAction
} from "vuex-module-decorators";
import store from "../index";
@Module({
  namespaced: true,
  name: "app",
  store,
  dynamic: true
})
class Auth extends VuexModule {}

export default Auth;
