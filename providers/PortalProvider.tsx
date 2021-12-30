import { PortalApi } from 'api/portal'
import { AddPortalBody } from 'interfaces'
import { createContext, ReactChild, useState } from 'react'

interface PortalState {
  portalForm: AddPortalBody
  setFieldValue: (field: string, value: any) => void
  submitForm: (planId: string) => void
}

const initialValues: PortalState = {
  portalForm: {
    serviceName: 'تست',
    serviceId: '1',
    domain: { domain: '', challengType: 1 },
    templateName: '',
    templateId: '',
    planId: '',
    reagentCode: '',
  },
  setFieldValue: () => {},
  submitForm: () => {},
}

export const PortalContext = createContext(initialValues)

interface Props {
  children: ReactChild
}

export default function PortalProvider({ children }: Props) {
  const [portalForm, setPortalForm] = useState<AddPortalBody>({
    ...initialValues.portalForm,
  })

  const setFieldValue = (field: string, value: any) => {
    setPortalForm((prev) => ({ ...prev, [field]: value }))
  }

  const submitForm = async (planId: string) => {
    await PortalApi.addPortal({ ...portalForm, planId })
  }

  return <PortalContext.Provider value={{ portalForm, setFieldValue, submitForm }}>{children}</PortalContext.Provider>
}
