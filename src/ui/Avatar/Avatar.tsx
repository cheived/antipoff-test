import clsx from "clsx"
import { FC } from "react"
import "./Avatar.scss"

interface IAvatar {
    src: string,
    cn?: string
    width: number,
    height: number
}

const Avatar: FC<IAvatar> = ({ src, cn, width, height }) => {
    return (
        <img className={clsx("avatar", cn)} src={src} width={width} height={height}></img>
    )
}

export default Avatar