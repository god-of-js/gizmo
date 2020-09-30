import store from "../index";
import {
  Module,
  VuexModule
  // getModule,
  // Mutation,
  // Action,
  // MutationAction
} from "vuex-module-decorators";
@Module({
  namespaced: true,
  name: "app",
  store,
  dynamic: true
})
class App extends VuexModule {
  appName = "Gizmo";
}

export default App;
