import { FC } from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

interface IPrivatePage {
    element: React.ReactNode
}

const PrivatePage: FC<IPrivatePage> = ({ element: Element }) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    console.log(isAuthenticated)
    return isAuthenticated ? Element : <Navigate to={'/registration'} />
}

export default PrivatePage