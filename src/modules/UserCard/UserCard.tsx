import clsx from "clsx"
import { Avatar } from "../../ui/Avatar"
import "./UserCard.scss"
import { LikeButton } from "./LikeButton"
import IUser from "../../types/user"
import { FC } from "react"





const UserCard: FC<IUser> = ({ first_name, last_name, avatar }) => {
    return (
        <div className="userCard">
            <Avatar src={avatar} width={124} height={124} />
            <h2 className={clsx("userCard__name")}>{first_name + " " + last_name}</h2>
            <LikeButton cn="userCard__like-button" />
        </div>
    )
}

export default UserCard