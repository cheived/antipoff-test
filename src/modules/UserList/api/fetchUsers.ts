
import UsersResponse from "../types/UsersResponse"

async function fetchUsers(page: number) {
    try {
        const users: UsersResponse = await fetch(`https://reqres.in/api/users?page=${page}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
        console.log(123)
        return users
    } catch (error) {
        console.log(error)
    }
}


export default fetchUsers