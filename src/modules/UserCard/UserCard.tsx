import clsx from "clsx"
import { Avatar } from "../../ui/Avatar"
import "./UserCard.scss"
import { LikeButton } from "./LikeButton"
import IUser from "../../types/user"
import { FC } from "react"
import { useNavigate } from "react-router-dom"





const UserCard: FC<IUser> = ({ first_name, last_name, avatar, id }) => {
    const navigate = useNavigate()
    return (
        <div className="userCard" onClick={() => navigate(`/users/${id}`)}>
            <Avatar src={avatar} width={124} height={124} />
            <h2 className={clsx("userCard__name")}>{first_name + " " + last_name}</h2>
            <LikeButton cn="userCard__like-button" />
        </div>
    )
}

export default UserCard