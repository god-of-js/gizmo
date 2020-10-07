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
  store
})
class App extends VuexModule {
  appName = "Gizmo";
}

export default App;
