import { User } from 'interfaces'

const USER_KEY = 'USER_KEY'

const isBrowser = process.browser

export class LocalStorageService {
  public static get user(): User {
    return isBrowser ? JSON.parse(localStorage.getItem(USER_KEY) || '') : null
  }

  public static set user(newUser: User) {
    isBrowser && localStorage.setItem(USER_KEY, JSON.stringify(newUser))
  }
}
