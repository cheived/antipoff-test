import { FC } from "react"
import { LoginForm } from "../../modules/LoginForm"
import clsx from "clsx"
import "./Login.scss"

const Login: FC = () => {
    return (
        <div className={clsx("login")}>
            <LoginForm cn={clsx("login__form")} />
        </div>
    )
}

export default Login