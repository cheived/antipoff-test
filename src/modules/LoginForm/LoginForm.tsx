import { FC, useEffect } from "react"
import "./LoginForm.scss"
import { Card } from "../../ui/Card"
import clsx from "clsx"
import { Button } from "../../ui/Button"
import { Input } from "../../ui/Input"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { register } from "../../api/register"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUser } from "../../store/userSlice"

interface ILoginForm {
    cn?: string
}

interface IFormInput {
    email: string,
    password: string,
}


const LoginForm: FC<ILoginForm> = ({ cn }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        alert("Вход по почте - eve.holt@reqres.in")
    }, [])

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }, mode: "onSubmit"
    });

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const loginData = await register(data)
        if (loginData) {
            dispatch(setUser(loginData))
            navigate("/")
        }
    }

    return (
        <Card cn={clsx("login-form", cn)} title="Вход">
            <form className={clsx("login-form__main-content")} onSubmit={handleSubmit(onSubmit)}>
                <div className="login-form__item">
                    <p className="login-form__item-title">Электронная почта</p>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: "Это поле обязательно", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Введите корректный адрес электронной почты" } }}
                        render={({ field }) => <Input {...field} error={errors.email?.message} />}
                    />
                </div>
                <div className="login-form__item" >
                    <p className="login-form__item-title">Пароль</p>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: "Это поле обязательно" }}
                        render={({ field }) => <Input type="password" {...field} error={errors.password?.message} />}
                    />
                </div>
            </form>
            <Button cn={clsx("login-form__button")} onClick={handleSubmit(onSubmit)}>Войти</Button>
            <Link className="login-form__reg-link" to={"/registration"}>Нет аккаунта? Зарегистрируйтесь!</Link>
        </Card>
    )
}

export default LoginForm