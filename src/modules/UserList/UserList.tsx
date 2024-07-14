import { useEffect, useState } from "react"
import { UserCard } from "../UserCard"
import fetchUsers from "./api/fetchUsers"
import UsersResponse from "./types/UsersResponse";
import './UserList.scss'

const UserList = () => {
    const [users, setUsers] = useState<UsersResponse>();
    useEffect(() => {
        const getUsers = async () => {
            setUsers(await fetchUsers())
        }
        getUsers()
    }, [])
    return (
        <section className="user-list">
            {users && users.data.map(item => {
                return (
                    <UserCard {...item} />
                )
            })}

        </section>
    )
}

export default UserList