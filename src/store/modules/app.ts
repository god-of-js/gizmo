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
  months = [
    "January", 
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
}

export default App;
