import { FC, MouseEventHandler } from "react"
import "./Button.scss"
import clsx from "clsx"

interface IButton {
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    cn?: string,
    children?: string,
}


const Button: FC<IButton> = ({ onClick, disabled = false, cn, children }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={clsx("button", cn)}
        >{children}</button>
    )
}

export default Button