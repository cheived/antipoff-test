import { FC, useEffect, useState } from "react"
import { UserCard } from "../UserCard"
import fetchUsers from "./api/fetchUsers"
import './UserList.scss'
import IUser from "../../types/user";
import clsx from "clsx";


interface IUserList {
    offset: number
}


const UserList: FC<IUserList> = ({ offset }) => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const getUsers = async () => {
            const users = (await fetchUsers(offset))?.data || []
            setUsers((state) => [...state, ...users])
        }
        getUsers()
    }, [offset])
    return (
        <section className={clsx("user-list", users.length > 0 && "user-list_visible")}>
            {users && users.map(item => {
                return (
                    <UserCard key={item.id} {...item} />
                )
            })}

        </section>
    )
}

export default UserList