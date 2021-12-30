import { CircularProgress, FormHelperText, TextField } from '@material-ui/core'
import { AuthApi } from 'api/auth'
import { useFormik } from 'formik'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import { AuthContext } from 'providers/AuthProvider'
import ArrowImage from 'public/images/main/arrow_down.png'
import SecondImage from 'public/images/main/second.png'
import { useContext, useEffect, useState } from 'react'
import { SetToken, SetUserToLocalStorage } from 'utils/localStorage'
import * as Yup from 'yup'

interface Form {
  code: string
}

const validationSchema = Yup.object({
  code: Yup.string().required('کد الزامی است'),
})

const initialValues: Form = {
  code: '',
}

export default function EnterCode() {
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()
  const { mobile } = useContext(AuthContext)
  const { setUser } = useContext(AuthContext)

  const onSubmit = async (values: Form) => {
    try {
      setError('')
      setLoading(true)

      const { data: user } = await AuthApi.confirmPassword({
        code: values.code,
        mobile,
      })
      setUser(user)
      SetUserToLocalStorage(user)
      SetToken(user.accessToken)

      router.replace('/#register-info', undefined, { scroll: false })
    } catch (error) {
      setError(error.response.data.errors.Code[0])
    } finally {
      setLoading(false)
    }
  }

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    onSubmit,
    validationSchema,
    initialValues,
  })

  useEffect(() => {
    if (error) setError('')
  }, [values])

  return (
    <>
      <div className="my-8 flex justify-center">
        <Image src={SecondImage} />
      </div>
      <div className="mx-auto flex justify-center relative px-4 sm:px-0" style={{ zIndex: 20 }}>
        <div className="max-w-sm flex-1">
          <form onSubmit={handleSubmit}>
            <TextField
              placeholder="کد را وارد کنید"
              size="small"
              variant="outlined"
              color="secondary"
              name="code"
              fullWidth
              disabled={loading}
              value={values.code}
              onChange={handleChange}
              onBlur={handleBlur}
              classes={{
                root: 'bg-gray-100 rounded-full border-0',
              }}
              InputProps={{
                classes: { notchedOutline: 'border-0' },
                endAdornment: loading && (
                  <div className="flex items-center">
                    <CircularProgress size={16} />
                  </div>
                ),
              }}
            />
            <div className="flex justify-between">
              <FormHelperText error className="mr-4">
                {touched.code ? errors.code || error : ''}
              </FormHelperText>
              {!loading && (
                <button
                  type="submit"
                  className="mt-1 border-b-2 inline-block text-gray-700 border-gray-500 cursor-pointer float-left text-sm"
                >
                  ورود
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <Image src={ArrowImage} />
      </div>
    </>
  )
}
