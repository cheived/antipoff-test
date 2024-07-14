import clsx from "clsx"
import { FC } from "react"
import "./LikeButton.scss"
interface ILikeButton {
    cn?: string,
}

const LikeButton: FC<ILikeButton> = ({ cn }) => {
    return (
        <button className={clsx("likeButton", cn)}>
            <img src="/img/like_outline.svg" />
        </button>
    )
}

export default LikeButton