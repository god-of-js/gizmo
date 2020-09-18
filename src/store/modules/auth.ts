import {
  Module,
  VuexModule,
  getModule,
  // Mutation,
  Action,
  // MutationAction
} from "vuex-module-decorators";
import router from '../../router'
import store from '../index'
import Api from '@/api'
import {setToken} from '@/services/cookies'
interface User {
  name: string;
  phone: string;
  password: string;
  email: string;

}
@Module({
  namespaced: true,
  name: "auth",
  dynamic: true,
  store
})
class Auth extends VuexModule {
  @Action
  public async register(data: User) {

    Api.post('/api/v1/user/register', data).then(response => {
      console.log(response)
      router.push(`/auth/verify-number/${response.data.verificationDetails.token}`)
    }).catch(err => {
      console.log(err.response)
    })
  }

}


export const AuthModule = getModule(Auth);