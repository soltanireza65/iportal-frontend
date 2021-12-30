import { requests } from 'api'
import { ConfirmPasswordBody, EditUserProfileBody } from 'interfaces'
// import { SetUserToLocalStorage } from 'utils/localStorage'

const BASE_API = process.env.NEXT_PUBLIC_AUTH_URL

export const AuthApi = {
  loginOrRegister: (mobile: string) => {
    return requests.post(`${BASE_API}/api/Account/PasswordLessLoginOrRegister`, {
      mobile: mobile,
    })
  },
  confirmPassword: (data: ConfirmPasswordBody) => {
    return requests.post(`${BASE_API}/api/Account/ConfirmPasswordLessLogin`, data)
    // SetUserToLocalStorage()
  },
  editUserProfile: (data: EditUserProfileBody) => {
    return requests.post(`${BASE_API}/api/User/EditUserProfile`, data)
  },
}

// process.browser ? JSON.parse(localStorage.getItem('USER_KEY') || '') : null
