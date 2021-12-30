import { Button, Grid, makeStyles, TextField } from '@material-ui/core'
import { AuthApi } from 'api/auth'
import { Formik, FormikHelpers } from 'formik'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import ArrowImage from 'public/images/main/arrow_down.png'
import BackRedBig from 'public/images/main/back_red_big.png'

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

export default function EnterInformation() {
  const styles = useStyles()
  const router = useRouter()

  interface Values {
    fullName: string
    email: string
  }

  return (
    <>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Image src={ArrowImage} />
      </div>
      <div className="relative">
        <div className={`absolute w-full left-0 top-0 -z-1 ${styles.image}`}>
          <Image src={BackRedBig} layout="fixed" />
        </div>
        <h2 className="text-center text-2xl pt-24 text-white">اطلاعات هویت</h2>
        <h2 className="text-center text-md mb-6 text-white">ثبت نام</h2>
        <div className="mx-auto flex justify-center text-white">
          <Formik
            initialValues={{ fullName: '', email: '' }}
            onSubmit={async (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
              try {
                const { message, status } = await AuthApi.editUserProfile({
                  fullName: values.fullName,
                })
                router.replace('/#choose-template', undefined, { scroll: false })
              } catch (error) {
                // setError(error.response.data.errors.Mobile[0]);
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <Grid container className="mb-3 px-4 sm:px-0" justifyContent="center">
                  <Grid item xs={12} sm={6} className="sm:pl-3 mb-3">
                    <TextField
                      placeholder="نام و نام خانوادگی"
                      label="نام و نام خانوادگی"
                      variant="outlined"
                      className={styles.input}
                      name="fullName"
                      onChange={handleChange}
                      value={values.fullName}
                      onBlur={handleBlur}
                      InputProps={{
                        classes: {
                          notchedOutline: 'border-white',
                        },
                      }}
                      fullWidth
                    />
                    {errors.fullName && touched.fullName && errors.fullName}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      placeholder="ایمیل"
                      label="ایمیل"
                      variant="outlined"
                      className={styles.input}
                      name="email"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      InputProps={{
                        classes: {
                          notchedOutline: 'border-white',
                        },
                      }}
                      fullWidth
                    />
                    {errors.email && touched.email && errors.email}
                  </Grid>
                </Grid>
                <div className="flex justify-center">
                  <div className="inline-flex flex-col items-center mt-5">
                    <Button
                      variant="contained"
                      size="large"
                      type="submit"
                      classes={{ root: 'bg-white' }}
                      disabled={isSubmitting}
                    >
                      ایجاد وبسایت
                    </Button>
                    <div className="self-end mt-1 inline-block border-black cursor-pointer float-left text-sm">
                      عضو هستم
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}
