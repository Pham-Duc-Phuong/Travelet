/* eslint-disable @typescript-eslint/no-explicit-any */

import { HTMLInputTypeAttribute } from "react"
import { UseFormRegister } from "react-hook-form"

type InputProp = {
    label?: string
    error?: string
    name?: string
    defaultValue?: any
    placeholder?: string
    register?: UseFormRegister<any>
    type?: HTMLInputTypeAttribute
}

export const Input = ({ label, register, name, type = "text", error, placeholder, defaultValue}: InputProp) => {
    return (
        <div>
            {!!label && <label className="label">{label}</label>}
            <input name={name} type={type} className="input" placeholder={placeholder} {...register?.(name)} defaultValue={defaultValue}/>
            {!!error && <p className="text-[12px] text-right text-red-600">{error}</p>}
        </div>
    )
}
