import clsx from "clsx"
import { FC, MouseEventHandler } from "react"
import "./LikeButton.scss"
interface ILikeButton {
    cn?: string,
    checked?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean
}

const LikeButton: FC<ILikeButton> = ({ cn, onClick, disabled = false, checked = false }) => {
    return (
        <button disabled={disabled} onClick={onClick} className={clsx("likeButton", cn)}>
            <img src={checked ? "/img/ic_like_checked.svg" : "/img/ic_like.svg"} />
        </button>
    )
}

export default LikeButton