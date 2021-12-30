import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetToken } from 'utils/localStorage'

const axiosInstance: AxiosInstance = axios.create()

axiosInstance.interceptors.request.use(
  function (request) {
    const token = GetToken()
    if (token) request.headers['Authorization'] = 'Bearer ' + token
    return request
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

const responseBody = (response: AxiosResponse) => response.data

export const requests = {
  get: (url: string, reqConfig?: AxiosRequestConfig) =>
    axiosInstance.get(url, reqConfig && reqConfig).then(responseBody),
  post: (url: string, body: {}, reqConfig?: AxiosRequestConfig) =>
    axiosInstance.post(url, body, reqConfig && reqConfig).then(responseBody),
  put: (url: string, body: {}) => axiosInstance.put(url, body).then(responseBody),
  del: (url: string) => axiosInstance.delete(url).then(responseBody),
}

export default axiosInstance
