import { makeStyles } from '@material-ui/core'
import Image from 'next/image'
import Link from 'next/link'
import ArrowImage from 'public/images/main/arrow_down.png'
import BackGrayImage from 'public/images/main/back_gray.png'
import FourthImage from 'public/images/main/fourth.png'

const useStyles = makeStyles((theme) => ({
  image: {
    '& div': {
      [theme.breakpoints.up('lg')]: {
        width: '100% !important',
      },
    },
  },
}))

export default function TemplateSettings() {
  const classes = useStyles()

  return (
    <>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Image src={ArrowImage} />
      </div>
      <div className="relative pt-16">
        <div className={`absolute left-0 top-0 -z-1 w-full ${classes.image}`}>
          <Image src={BackGrayImage} layout="fixed" />
        </div>
        <div className="flex justify-center mb-8">
          <Image src={FourthImage} />
        </div>
        <h2 className="text-center text-2xl mb-4">تنظیمات قالب</h2>
        <div className="text-center">
          <Link href="#choose-domain">ذخیره</Link>
        </div>
      </div>
    </>
  )
}
