import clsx from "clsx"
import { FC, MouseEventHandler } from "react"
import "./IconButton.scss"
interface IIconButton {
    src?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    cn?: string
}


const IconButton: FC<IIconButton> = ({ src, onClick, cn }) => {
    return (
        <button onClick={onClick} className={clsx("icon-button", cn)}>
            <img src={src} />
        </button>
    )
}

export default IconButton