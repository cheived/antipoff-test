import { FC } from "react"
import { RegistrationForm } from "../../modules/RegistrationForm"
import clsx from "clsx"
import "./Registration.scss"

const Registration: FC = () => {
    return (
        <div className={clsx("registration")}>
            <RegistrationForm cn={clsx("registration__form")} />
        </div>
    )
}

export default Registration