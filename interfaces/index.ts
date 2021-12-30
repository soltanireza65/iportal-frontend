export enum RESULT_STATUS {
  SUCCESS = 1,
  FAILED = 2,
}
export interface GlobalResult<T> {
  data: T
  message: string
  status: RESULT_STATUS
}
export interface AddPortalBody {
  serviceName: string
  serviceId: string
  domain: {
    domain: string
    challengType: number
  }
  templateName: string
  templateId: string
  planId: string
  reagentCode: string
}

export enum CHALLENG_TYPE {
  NAMESERVER_RECORD = 1,
  TXT_RECORD = 2,
}

export interface Portal {
  id: string
  userId: string
  serviceName: string
  serviceId: string
  domains: Domain[]
  templateName: string
  templateId: string
  planId: string
  createdDateTime: string
  persianCreatedDateTime: string
}

export interface Domain {
  domain: string
  isPrimary: true
  isSecure: true
  redirectUrl: string
  status: 0
  challengType: 0
  txtHash: string
  nameServers: string[]
}
export interface ConfirmPasswordBody {
  mobile: string
  code: string
}
export interface EditUserProfileBody {
  fullName: string
}

export interface User {
  accessToken: string
  refreshToken: string
  expiresTime: number
  tokenType: string
  scope: string
}
export interface Template {
  name: string
  link: string
  image: any
  id: string
}

export enum templateTypes {
  NAMESERVER_RECORD = 1,
  TXT_RECORD = 2,
}
