import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "components"
import { useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from "react-toastify"
import { AccountSchema, AccountSchemaType } from "schema"
import { UserServices } from "services"
import { useAppDispatch, useAppSelector } from "store"
import { getUserByIDThunk } from "store/Users"
import { getID } from "utils"

export const AccountInfo = () => {
    const { UserByID } = useAppSelector(state => state.User)
    const dispatch = useAppDispatch()
    const { register, reset, handleSubmit, formState: { errors } } = useForm<AccountSchemaType>({
        mode: "onChange",
        resolver: zodResolver(AccountSchema)
    })
    useEffect(() => {
        reset(UserByID)
    }, [reset, UserByID])
    const setSubmit: SubmitHandler<AccountSchemaType> = async (values) => {
        const data = { ...values, id: UserByID?.id, gender: UserByID?.gender, role: UserByID?.role }
        try {
            await UserServices.updateUser(data, UserByID?.id)
            dispatch(getUserByIDThunk(getID()))
            toast.success('Cập nhật thành công')
        } catch (error) {
            toast.error(error.response.data.content)
        }
    }
    return (
        <form className="grid gap-5" onSubmit={handleSubmit(setSubmit)}>
            <Input label="Username" name="name" error={errors?.name?.message} register={register} />
            <Input label="Birthday" name="birthday" error={errors?.birthday?.message} register={register} />
            <Input label="Email" name="email" error={errors?.email?.message} register={register} />
            <Input label="Phone" name="phone" error={errors?.phone?.message} register={register} />
            <button className="btn-register mt-3">Cập nhật</button>
        </form>
    )
}
