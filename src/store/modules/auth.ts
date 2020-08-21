import {
  Module,
  VuexModule,
  getModule,
  // Mutation,
  Action,
  // MutationAction
} from "vuex-module-decorators";
import store from '../index'
import Api from '@/api'
@Module({
  namespaced: true,
  name: "auth",
  dynamic: true,
  store
})
class Auth extends VuexModule {

  @Action({ rawError: true })
  public async register(data: object) {
    Api.post('', data)
  }

}


export const AuthModule = getModule(Auth);