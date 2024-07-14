import { FC, MouseEventHandler } from "react"
import "./Button.scss"
import clsx from "clsx"

interface IButton {
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    cn?: string,
    children?: string,
    outlined?: boolean
}


const Button: FC<IButton> = ({ onClick, disabled = false, cn, children, outlined }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={clsx("button", cn, outlined && "button_outlined")}
        >{children}</button>
    )
}

export default Button