import { FC } from "react"
import "./RegistrationForm.scss"
import { Card } from "../../components/Card"
import clsx from "clsx"
import { Button } from "../../ui/Button"
import { Input } from "../../ui/Input"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { register } from "./api/api"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"

interface IRegistrationForm {
    cn?: string
}

const RegistrationForm: FC<IRegistrationForm> = ({ cn }) => {
    const navigate = useNavigate()
    const login = useAuth(state => state.login)
    interface IFormInput {
        name: string,
        email: string,
        password: string,
        confirmPassword: string
    }

    const { control, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }, mode: "onSubmit"
    });

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const regData = await register(data)
        if (regData) {
            login(regData)
            console.log(regData)
            navigate("/")
        }
    }

    return (
        <Card cn={clsx("form", cn)} title="Регистрация">
            <form className={clsx("form__main-content")} onSubmit={handleSubmit(onSubmit)}>
                <div className="form__item">
                    <p className="form__item-title">Имя</p>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <Input {...field} error={errors.name && true} />}
                    />
                </div>
                <div className="form__item">
                    <p className="form__item-title">Электронная почта</p>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ }}
                        render={({ field }) => <Input {...field} error={errors.email && true} />}
                    />
                </div>
                <div className="form__item" >
                    <p className="form__item-title">Пароль</p>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <Input type="password" {...field} error={errors.password && true} />}
                    />
                </div>
                <div className="form__item">
                    <p className="form__item-title">Подтвердите пароль</p>
                    <Controller
                        name="confirmPassword"
                        control={control}
                        rules={{ required: true, validate: (value) => watch("password") === value }}
                        render={({ field }) => <Input type="password" {...field} error={errors.confirmPassword && true} />}
                    />
                </div>
            </form>
            <Button cn={clsx("form__button")} onClick={handleSubmit(onSubmit)} >Зарегистрироваться</Button>
        </Card>
    )
}

export default RegistrationForm