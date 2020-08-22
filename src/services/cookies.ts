import Cookies from 'js-cookie';
const tokenKey = 'auth-token';
const profileKey = 'profile-token';
const setToken = (value: string,key: string = tokenKey) => {
    Cookies.set(key, value)
}
const getToken = (key: string = tokenKey) => {
   return Cookies.get(key) !== undefined? Cookies.get(key) : ''
}
const setProfile = (value: object, key: string = profileKey) => {
    Cookies.set(key, value)
}
const getProfile = (key: string = profileKey) => {
    return Cookies.get(key)
}
export {
    setToken,
    getToken,
    setProfile,
    getProfile
}