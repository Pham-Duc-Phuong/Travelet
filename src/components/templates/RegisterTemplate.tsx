import { useForm, SubmitHandler } from 'react-hook-form'
import { RegisterSchema, RegisterSchemaType } from 'schema'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from 'components'
import { AuthService } from 'services'
import { toast } from 'react-toastify'

export const RegisterTemplate = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(RegisterSchema)
  })
  console.log('errors', errors)
  const setSubmit: SubmitHandler<RegisterSchemaType> = async (values) => {
    try {
      await AuthService.register(values)
      toast.success("Register Success")
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <div>
      <p className="title">Register</p>
      <form onSubmit={handleSubmit(setSubmit)}>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          <Input label="ID" name="id" error={errors?.id?.message} register={register} placeholder='Type your ID' type='number' />
          <Input label="Name" name="name" error={errors?.name?.message} register={register} placeholder='Type your name' />
          <Input label="Email" name="email" error={errors?.email?.message} register={register} placeholder='Type your email' />
          <Input label="Password" name="password" error={errors?.password?.message} register={register} placeholder='Type your password' />
          <Input label="Phone" name="phone" error={errors?.phone?.message} register={register} placeholder='Type your phone' />
          <Input label="Birthday" name="birthday" error={errors?.birthday?.message} register={register} placeholder='Type your birthday' />
          <Input label="Gender" name="gender" error={errors?.gender?.message} register={register} placeholder='Type your gender' type='boolean' defaultValue={true} />
          <Input label="Role" name="role" error={errors?.role?.message} register={register} placeholder='Type your role' />
        </div>
        <button type="submit" className="btn-register mt-4">Register</button>
      </form>
    </div>
  )
}
