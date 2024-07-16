
import UsersResponse from "../types/UsersResponse"

async function fetchUsers(page: number) {
    try {
        const users: UsersResponse = await fetch(`https://reqres.in/api/users?page=${page}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
        return users
    } catch (error) {
        console.error(error)
    }
}


export default fetchUsers