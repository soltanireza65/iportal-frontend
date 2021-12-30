import { User } from 'interfaces'

export const SetUserToLocalStorage = (value: User) => {
  return process.browser && localStorage.setItem('USER_KEY', JSON.stringify(value))
}
export const GetUserFromLocalStorage = () => {
  return process.browser ? JSON.parse(localStorage.getItem('USER_KEY') || '') : null
}

export const SetToken = (token: string) => {
  return process.browser && localStorage.setItem('TOKEN', token)
}

export const GetToken = () => {
  return process.browser ? localStorage.getItem('TOKEN') : null
}
