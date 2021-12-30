import { requests } from 'api'
import { AddPortalBody } from 'interfaces'

const PREFIX = 'https://api.tarnamagostar.com' + '/portal/api/Portal'

export const PortalApi = {
  addPortal: (data: AddPortalBody) => {
    // const { serviceName, serviceId, domain, templateName, templateId, planId, reagentCode } = data
    console.log('DEBUG Data: ', data)
    return requests.post(`${PREFIX}/AddPortal`, data)
  },
}
