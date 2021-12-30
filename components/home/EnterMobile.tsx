import {
  CircularProgress,
  FormHelperText,
  makeStyles,
  TextField,
} from '@material-ui/core'
import ArrowLeft from '@material-ui/icons/ArrowLeft'
import { AuthApi } from 'api/auth'
import { useFormik } from 'formik'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import { AuthContext } from 'providers/AuthProvider'
import ClickImage from 'public/images/main/7-click.png'
import BackImage from 'public/images/main/back.png'
import BackRedImage from 'public/images/main/back_red.png'
import FirstImage from 'public/images/main/first.png'
import RocketImage from 'public/images/main/rocket.png'
import Stars1Image from 'public/images/main/stars_1.png'
import { useContext, useEffect, useState } from 'react'
import * as Yup from 'yup'

const useStyles = makeStyles((theme) => ({
  image: {
    '& div': {
      [theme.breakpoints.up('lg')]: {
        width: '100% !important',
      },
    },
  },
}))

interface Form {
  mobile: string
}

const validationSchema = Yup.object({
  mobile: Yup.string()
    .required('شماره موبایل الزامی است')
    .matches(/\d{10,11}/, 'شماره موبایل صحیح نمیباشد'),
})

const initialValues: Form = {
  mobile: '',
}

export default function EnterMobile() {
  const classes = useStyles()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const router = useRouter()
  const auth = useContext(AuthContext)

  const onSubmit = async (values: Form) => {
    try {
      setError('')
      setLoading(true)
      await AuthApi.loginOrRegister(values.mobile)
      auth.setMobile(values.mobile)
      router.replace('/#receive-code', undefined, { scroll: false })
    } catch (error) {
      // setError(error.response.data.errors.Mobile[0]);
    } finally {
      setLoading(false)
    }
  }

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      onSubmit,
      validationSchema,
      initialValues,
    })

  useEffect(() => {
    if (error) setError('')
  }, [values])

  return (
    <div className="min-h-screen pt-16 text-white relative">
      <div
        className={`absolute left-0 -top-12 -z-1 max-h-screen w-full ${classes.image}`}
      >
        <Image src={BackImage} layout="fixed" />
      </div>
      <div
        className="absolute top-1/4 transform translate-x-1/4 -right-20 -translate-y-40 2xl:-translate-y-60"
        style={{ zIndex: 20 }}
      >
        <Image src={Stars1Image} />
      </div>
      <div className="flex justify-center relative">
        <div>
          <Image src={ClickImage} alt="تنها با ۷ کلیک وبسایت خود را بسازید" />
          <div
            className="absolute left-10 lg:left-20 xl:left-40 top-1/2 transform -translate-x-2/3 -translate-y-20"
            style={{ zIndex: 20 }}
          >
            <Image src={RocketImage} />
          </div>
        </div>
      </div>

      <div className="mt-12 relative">
        <div
          className={`absolute w-full h-min-max left-0 top-0 ${classes.image}`}
        >
          <Image src={BackRedImage} layout="fixed" />
        </div>
        <div className="relative pt-24" style={{ zIndex: 30 }}>
          <div className="text-center">
            <Image src={FirstImage} width={123} height={103} />
          </div>
          <h2 className="text-center text-2xl mb-3">ورود به سیستم</h2>
          <div className="mx-auto flex justify-center px-4 sm:px-0">
            <div className="max-w-sm flex-1">
              <form onSubmit={handleSubmit}>
                <TextField
                  placeholder="شماره موبایل خود را وارد کنید"
                  size="small"
                  variant="outlined"
                  name="mobile"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  color="secondary"
                  fullWidth
                  disabled={loading}
                  classes={{ root: 'bg-white rounded-full' }}
                  InputProps={{
                    endAdornment: loading ? (
                      <div className="flex items-center">
                        <CircularProgress size={16} />
                      </div>
                    ) : (
                      <ArrowLeft
                        fontSize="large"
                        color="secondary"
                        className="-ml-4"
                      />
                    ),
                  }}
                />
                <div className="flex justify-between">
                  <FormHelperText className="text-white mr-4">
                    {touched.mobile ? errors.mobile || error : ''}
                  </FormHelperText>
                  {!loading && (
                    <button
                      className="mt-1 border-b-2 inline-block border-white cursor-pointer float-left text-sm"
                      type="submit"
                    >
                      دریافت کد
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
