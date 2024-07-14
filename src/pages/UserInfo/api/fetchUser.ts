import IUser from "../../../types/user"


const fetchUser = async (id: number | string) => {
    try {
        const res: { data: IUser } = await fetch(`https://reqres.in/api/users/${id}`)
            .then(result => {
                if (result.ok) {
                    return result.json()
                }
            })
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export default fetchUser