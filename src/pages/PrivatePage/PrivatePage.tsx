import { FC } from "react"
import useAuth from "../../hooks/useAuth"
import { Navigate } from "react-router-dom"

interface IPrivatePage {
    element: React.ReactNode
}

const PrivatePage: FC<IPrivatePage> = ({ element: Element }) => {
    const isAuthenticated = useAuth(state => state.isAuthenticated)
    console.log(isAuthenticated)
    return isAuthenticated ? Element : <Navigate to={'/registration'} />
}

export default PrivatePage