
import UsersResponse from "../types/UsersResponse"

async function fetchUsers() {
    try {
        const users: UsersResponse = await fetch("https://reqres.in/api/users?page=1")
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
        return users
    } catch (error) {
        console.log(error)
    }
}


export default fetchUsers