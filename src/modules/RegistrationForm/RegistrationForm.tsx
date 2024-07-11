import { FC } from "react"
import "./RegistrationForm.scss"
import { Card } from "../../components/Card"
import clsx from "clsx"
import { Button } from "../../ui/Button"
import { Input } from "../../ui/Input"

interface IRegistrationForm {
    cn?: string
}

const RegistrationForm: FC<IRegistrationForm> = ({ cn }) => {
    return (
        <Card cn={clsx("form", cn)} title="Регистрация">
            <form className={clsx("form__main-content")}>
                <div className="form__item">
                    <p className="form__item__title">Имя</p>
                    <Input placeholder="Артур" />
                </div>
                <div className="form__item">
                    <p className="form__item__title">Электронная почта</p>
                    <Input placeholder="example@mail.ru" />
                </div>
                <div className="form__item" >
                    <p className="form__item__title">Пароль</p>
                    <Input type="password" />
                </div >
                <div className="form__item">
                    <p className="form__item__title">Подтвердите пароль</p>
                    <Input type="password" />
                </div>
            </form>
            <Button cn={clsx("form__button")} >Зарегистрироваться</Button>
        </Card>
    )
}

export default RegistrationForm