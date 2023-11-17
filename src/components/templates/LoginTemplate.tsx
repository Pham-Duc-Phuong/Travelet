import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "components"
import { useForm, SubmitHandler } from "react-hook-form"
import { LoginSchema, LoginSchemaType } from "schema"
import { useAppDispatch, useAppSelector } from "store"
import { SigninThunk } from "store/Auth"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { Button } from "antd"

export const LoginTemplate = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { isLoginPending } = useAppSelector(state => state.Auth)
  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(LoginSchema)
  })
  const setSubmit: SubmitHandler<LoginSchemaType> = (values) => {
    dispatch(SigninThunk(values)).unwrap().then(() => { navigate("/"), toast.success('LoginSuccess') }).catch((error) => { toast.error(error.response.data.message) })
  }
  return (
    <div>
      <p className="title">Login</p>
      <form onSubmit={handleSubmit(setSubmit)}>
        <Input label="Email" name="email" error={errors?.email?.message} register={register} placeholder='Type your email' />
        <Input label="Password" name="password" error={errors?.password?.message} register={register} placeholder='Type your password' />
        <Button htmlType="submit" className="btn-register mt-4" loading={isLoginPending}>Login</Button>
      </form>
    </div>
  )
}
