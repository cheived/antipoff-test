import IUser from "../../../types/user"

interface UsersResponse {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: IUser[]
}

export default UsersResponse