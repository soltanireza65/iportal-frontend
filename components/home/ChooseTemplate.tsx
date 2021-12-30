import { Container, Grid, Tab, Tabs } from '@material-ui/core'
import { CheckCircleOutline } from '@material-ui/icons'
import Pagination from 'components/pagination'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import { PortalContext } from 'providers/PortalProvider'
import LinkIcon from 'public/images/icons/link.svg'
import MagnifyIcon from 'public/images/icons/magnifying-glass.svg'
import ThirdImage from 'public/images/main/third.png'
import Template1 from 'public/images/templates/template_1.png'
import Template2 from 'public/images/templates/template_2.png'
import Template3 from 'public/images/templates/template_3.png'
import { ChangeEvent, useContext, useState } from 'react'

const templateTypes: string[] = ['همه', 'شخصی', 'کسب و کار', 'فروشگاه', 'متفرقه']

interface Template {
  name: string
  link: string
  image: any
  id: string
}

const templates: Template[] = [
  {
    name: 'تست ۱',
    link: '',
    image: Template1,
    id: '1',
  },
  {
    name: 'تست ۲',
    link: '',
    image: Template2,
    id: '2',
  },
  {
    name: 'تست ۳',
    link: '',
    image: Template3,
    id: '3',
  },
]

export default function ChooseTemplate() {
  const router = useRouter()

  const [tab, setTab] = useState(0)

  const handleChangeTab = (event: ChangeEvent<{}>, newValue: number) => {
    setFieldValue('serviceName', templateTypes[newValue])
    setFieldValue('serviceId', newValue)
    setTab(newValue)
  }

  const [page, setPage] = useState(0)

  const handleChangePage = (newValue: number) => {
    setPage(newValue)
  }

  const { portalForm, setFieldValue } = useContext(PortalContext)

  const onChangeTemplate = (template: Template) => {
    setFieldValue('templateId', template.id)
    setFieldValue('templateName', template.name)
    router.replace('/#template-settings')
  }

  return (
    <>
      <div className="flex justify-center mb-8">
        <Image src={ThirdImage} />
      </div>
      <h2 className="text-center text-3xl mb-7">انتخاب قالب</h2>
      <div className="mx-auto flex justify-center">
        <Tabs
          value={tab}
          indicatorColor="secondary"
          textColor="primary"
          onChange={handleChangeTab}
          aria-label="disabled tabs example"
          classes={{
            root: 'border-2 rounded-full',
            indicator: 'h-full -z-1 rounded-full',
          }}
        >
          {templateTypes.map((templateType) => (
            <Tab key={templateType} color="" label={templateType} classes={{ selected: 'text-white' }} />
          ))}
        </Tabs>
      </div>

      <div className="mt-8">
        <Container className="lg:px-16">
          <Grid container justifyContent="center">
            {templates.map((template) => (
              <Grid
                item
                container
                justifyContent="center"
                xs={12}
                sm={6}
                md={4}
                key={template.id}
                className="mb-2 relative px-2"
              >
                <Image src={template.image} />
                <div
                  className={`flex items-center justify-center absolute left-2 right-2 top-0 w-full h-full bg-white bg-opacity-50 transition-opacity opacity-0 hover:opacity-100 ${
                    portalForm.templateId === template.id ? 'opacity-100' : ''
                  }`}
                >
                  <div className="w-16 h-16 cursor-pointer rounded-full bg-red-500 p-4">
                    <Image src={MagnifyIcon} />
                  </div>
                  <div
                    className="w-16 h-16 p-4 mx-4 cursor-pointer rounded-full bg-white bg-opacity-25"
                    onClick={() => {
                      onChangeTemplate(template)
                    }}
                  >
                    <Image src={LinkIcon} />
                  </div>
                  {portalForm.templateId === template.id && (
                    <div className="absolute left-8 top-4 text-5xl text-green-700">
                      <CheckCircleOutline fontSize="inherit" color="inherit" />
                    </div>
                  )}
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination page={page} onChange={handleChangePage} totalPages={templates.length} />
      </div>
    </>
  )
}
