import clsx from "clsx"
import { Avatar } from "../../ui/Avatar"
import "./UserCard.scss"
import { LikeButton } from "./LikeButton"
import IUser from "../../types/user"
import { FC, useState } from "react"
import { useNavigate } from "react-router-dom"





const UserCard: FC<IUser> = ({ first_name, last_name, avatar, id }) => {
    const navigate = useNavigate()

    const [like, setLike] = useState(!!(getLocalStorageItem("likes") || []).includes(id))



    function getLocalStorageItem(item: string) {
        const likes = localStorage.getItem(item)
        const parsedLikes = likes ? JSON.parse(likes) : null
        return parsedLikes
    }

    function updateLikes() {
        const likes: number[] = getLocalStorageItem("likes") || []
        if (likes.includes(id) && like) {
            localStorage.setItem("likes", JSON.stringify(likes.filter(item => item != id)))
            setLike(false)
        } else if (!likes.includes(id) && !like) {
            localStorage.setItem("likes", JSON.stringify([...likes, id]))
            setLike(true)
        }
    }

    function handleButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.stopPropagation();
        updateLikes()
    }




    return (
        <div className="userCard" onClick={() => navigate(`/users/${id}`)}>
            <Avatar src={avatar} width={124} height={124} />
            <h2 className={clsx("userCard__name")}>{first_name + " " + last_name}</h2>
            <LikeButton cn="userCard__like-button" checked={like} onClick={(event) => handleButtonClick(event)} />
        </div>
    )
}

export default UserCard