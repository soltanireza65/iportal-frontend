import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core'
import ArrowLeft from '@material-ui/icons/ArrowLeft'
import { useFormik } from 'formik'
import { CHALLENG_TYPE } from 'interfaces'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import { PortalContext } from 'providers/PortalProvider'
import BackRedBig from 'public/images/main/back_red_xl.png'
import FifthImage from 'public/images/main/fifth.png'
import { useContext } from 'react'
import * as Yup from 'yup'

const useStyles = makeStyles((theme) => ({
  image: {
    '& div': {
      [theme.breakpoints.up('lg')]: {
        width: '100% !important',
      },
    },
  },
  input: {
    '& .MuiInputLabel-outlined': {
      color: 'white',
    },
    '& input::placeholder': {
      color: 'rgba(255,255,255,0.65)',
    },
  },
}))

interface Form {
  domain: string
  challengType: CHALLENG_TYPE
}

const initialValues: Form = {
  domain: '',
  challengType: 0,
}

export default function EnterDomain() {
  const styles = useStyles()
  const { setFieldValue, portalForm } = useContext(PortalContext)
  const router = useRouter()
  console.log('portalForm: ', portalForm)

  const onSubmit = (values: Form) => {
    // setFieldValue('domain', { ...values })
    setFieldValue('domain', {
      domain: values.domain,
      challengType: Number(values.challengType),
    })
    router.replace('/#payment-pannel')
  }

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object({
      domain: Yup.string().required('دامنه الزامی است'),
      challengType: Yup.number().required('یکی از گزینه ها را انتخاب کنید'),
    }),
  })

  return (
    <div className="relative text-white pt-12">
      <div className={`absolute w-full left-0 top-0 -z-1 ${styles.image}`}>
        <Image src={BackRedBig} layout="fixed" />
      </div>
      <div className="flex justify-center mb-8">
        <Image src={FifthImage} />
      </div>
      <h2 className="text-center text-2xl mb-4">انتخاب دامنه</h2>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto flex justify-center px-4 sm:px-0">
          <div className="flex-1 max-w-sm">
            <div className="mt-6">
              <TextField
                placeholder="نام دامنه"
                variant="outlined"
                color="secondary"
                name="domain"
                value={values.domain}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                fullWidth
                classes={{ root: 'bg-white rounded-full' }}
                InputProps={{
                  endAdornment: <ArrowLeft fontSize="large" color="secondary" className="-ml-3" />,
                }}
              />
            </div>
            <FormControl component="fieldset" className="mt-4 mb-2">
              <RadioGroup name="challengType" value={values.challengType + ''} onChange={handleChange}>
                <FormControlLabel
                  value={CHALLENG_TYPE.TXT_RECORD + ''}
                  control={<Radio color="primary" />}
                  label={
                    <Typography variant="body2">سرویس dns دارم و تنها خواهان استفاده از خدمات iportal هستم</Typography>
                  }
                />
                <FormControlLabel
                  value={CHALLENG_TYPE.NAMESERVER_RECORD + ''}
                  control={<Radio color="primary" />}
                  label={<Typography variant="body2">سرویس dns ندارم</Typography>}
                />
              </RadioGroup>
              <FormHelperText error>{touched.challengType ? errors.challengType : ''}</FormHelperText>
            </FormControl>
            <Button className="mt-3" variant="outlined" fullWidth size="large" color="inherit" type="submit">
              مشاهده دامنه
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
