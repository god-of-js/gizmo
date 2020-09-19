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
import {Api} from '@/api'
import {User, Response, Data} from '@/utils/models.ts'
import {setToken} from '@/services/cookies'
@Module({
  namespaced: true,
  name: "auth",
  dynamic: true,
  store
})
class Auth extends VuexModule {
  @Action
  public async register(data: User) {
    console.log(data)
    Api().post('/api/v1/user/register', data).then((response: Data) => {
      console.log(response)
      router.push(`/auth/verify-number/${response.data.verificationDetails.token}`)
    }).catch((err: Response) => {
      console.log(err.response)
    })
  }

}
export const AuthModule = getModule(Auth);