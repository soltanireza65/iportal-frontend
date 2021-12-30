import { Button, Container, Grid } from '@material-ui/core'
import Image from 'next/image'
import Link from 'next/link'
import { PortalContext } from 'providers/PortalProvider'
import ArrowImage from 'public/images/main/arrow_down.png'
import SixImage from 'public/images/main/sixth.png'
import { useContext } from 'react'

interface PaymentPlan {
  title: string
  id: string
  priceMonthly: number
  priceYearly: number
}

const plans: PaymentPlan[] = [
  {
    title: 'مبتدی',
    priceMonthly: 600000,
    priceYearly: 5760000,
    id: '1',
  },
  {
    title: 'استاندارد',
    priceMonthly: 2080000,
    priceYearly: 24960000,
    id: '2',
  },
  {
    title: 'پیشرفته',
    priceMonthly: 4960000,
    priceYearly: 59520000,
    id: '3',
  },
]

export default function PaymentPannel() {
  const { setFieldValue, submitForm } = useContext(PortalContext)

  const onSelectPayment = (plan: PaymentPlan) => {
    setFieldValue('planId', plan.id)

    submitForm(plan.id)
  }

  return (
    <Container>
      <div className="absolute -bottom-8 md:bottom-0 left-1/2 transform -translate-x-1/2">
        <Image src={ArrowImage} />
      </div>
      <div className="flex justify-center mb-5">
        <Image src={SixImage} />
      </div>
      <h2 className="text-center text-2xl font-bold">پنل پرداخت</h2>
      <Grid container className="mt-6 lg:px-5" justifyContent="center">
        {plans.map((plan) => (
          <Grid xs={12} sm={6} md={4} item key={plan.id} className="text-center px-5 mb-5">
            <div className="bg-gray-100 pb-12 font-bold">
              <h3 className="bg-red-500 text-white relative py-1 text-lg">
                <div className="bg-red-500 absolute left-1/2 transform -translate-x-1/2 bottom-1/2 w-6 h-6 rotate-45 translate-y-full"></div>
                <div className="relative z-2">{plan.title}</div>
              </h3>
              <div className="px-5 mt-7">
                <div className="text-gray-500">{(plan.priceMonthly / 10000).toLocaleString()} هزارتومان</div>
                <div className="text-gray-500 mt-5">
                  دوره پرداخت یک ساله و به مبلغ {(plan.priceYearly / 10).toLocaleString()} تومان می باشد
                </div>
              </div>
              <Link href="#payment">
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  className="mt-12"
                  onClick={() => {
                    onSelectPayment(plan)
                  }}
                >
                  تست رایگان
                </Button>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
