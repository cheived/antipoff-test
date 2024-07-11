import "./Card.scss"
import clsx from "clsx"
import { FC } from "react"

interface ICard {
    children?: React.ReactNode,
    title: string,
    cn?: string
}

const Card: FC<ICard> = ({ children, title, cn }) => {
    return (
        <div className={clsx("card", cn)}>
            <p className={clsx("card__card-title")}>{title}</p>
            {children}
        </div>
    )
}

export default Card