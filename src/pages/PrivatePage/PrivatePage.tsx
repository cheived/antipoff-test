import { FC } from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
interface IPrivatePage {
    element: React.ReactNode
}

const PrivatePage: FC<IPrivatePage> = ({ element: Element }) => {
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated)
    return isAuthenticated ? Element : <Navigate to={'/registration'} />
}

export default PrivatePage