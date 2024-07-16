import { FC, useEffect } from "react"
import "./RegistrationForm.scss"
import { Card } from "../../ui/Card"
import clsx from "clsx"
import { Button } from "../../ui/Button"
import { Input } from "../../ui/Input"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { register } from "../../api/register"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUser } from "../../store/userSlice"

interface IRegistrationForm {
    cn?: string
}


const RegistrationForm: FC<IRegistrationForm> = ({ cn }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    interface IFormInput {
        name: string,
        email: string,
        password: string,
        confirmPassword: string
    }

    useEffect(() => {
        alert("Регистрация по почте - eve.holt@reqres.in")
    }, [])

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
            dispatch(setUser(regData))
            navigate("/")
        }
    }

    return (
        <Card cn={clsx("reg-form", cn)} title="Регистрация">
            <form className={clsx("reg-form__main-content")} onSubmit={handleSubmit(onSubmit)}>
                <div className="reg-form__item">
                    <p className="reg-form__item-title">Имя</p>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: "Это поле обязательно", }}
                        render={({ field }) => <Input {...field} error={errors.name?.message} />}
                    />
                </div>
                <div className="reg-form__item">
                    <p className="reg-form__item-title">Электронная почта</p>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: "Это поле обязательно", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Введите корректный адрес электронной почты" } }}
                        render={({ field }) => <Input {...field} error={errors.email?.message} />}
                    />
                </div>
                <div className="reg-form__item" >
                    <p className="reg-form__item-title">Пароль</p>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: "Это поле обязательно" }}
                        render={({ field }) => <Input type="password" {...field} error={errors.password?.message} />}
                    />
                </div>
                <div className="reg-form__item">
                    <p className="reg-form__item-title">Подтвердите пароль</p>
                    <Controller
                        name="confirmPassword"
                        control={control}
                        rules={{ required: "Это поле обязательно", validate: (value) => watch("password") === value ? true : "Пароли должны совпадать" }}
                        render={({ field }) => <Input type="password" {...field} error={errors.confirmPassword?.message} />}
                    />
                </div>
            </form>
            <Button cn={clsx("reg-form__button")} onClick={handleSubmit(onSubmit)} >Зарегистрироваться</Button>
            <Link className="reg-form__login-link" to={"/login"}>Зарегистрированы? Войти!</Link>
        </Card>
    )
}

export default RegistrationForm