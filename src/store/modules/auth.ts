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
import {setToken} from '@/services/cookies'
@Module({
  namespaced: true,
  name: "auth",
  dynamic: true,
  store
})
class Auth extends VuexModule {

  @Action({ rawError: true })
  public async register(data: object) {
    Api.post('/api/v1/user/register', data).then(response => {
      console.log(response)
    })
  }

}


export const AuthModule = getModule(Auth);