import { FC } from "react"
import { Button } from "../../ui/Button"
import "./Header.scss"
import clsx from "clsx"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"

interface IHeader {
    children: React.ReactElement,
    cn?: string,
    left?: string,
}

const Header: FC<IHeader> = ({ children, cn, left }) => {
    const { logout } = useAuth()
    const navigate = useNavigate();
    function handleLogout() {
        logout()
        navigate("/registration")
    }
    return (
        <header className={clsx("header", cn)}>
            {left && <Button cn="header__button-left" outlined>Назад</Button>}
            {children}
            <Button cn="header__button-right" outlined onClick={() => handleLogout()}>Выход</Button>
        </header>
    )
}

export default Header