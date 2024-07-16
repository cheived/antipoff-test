import { FC } from "react"
import { Button } from "../../ui/Button"
import "./Header.scss"
import clsx from "clsx"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../../store/userSlice"
import { IconButton } from "../../ui/IconButton"

interface IHeader {
    children: React.ReactElement,
    cn?: string,
    left?: string,
}

const Header: FC<IHeader> = ({ children, cn, left }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    function handleLogout() {
        dispatch(logout())
        navigate("/registration")
    }
    return (
        <header className={clsx("header", cn)}>
            <div className="header__button-wrapper">
                <IconButton cn={clsx("header__button-back-icon", left && "header__button-back-icon_show")} src="/img/ic_back.svg" onClick={() => navigate(-1)} />
                <Button cn={clsx("header__button-back", left && "header__button-back_show")} outlined onClick={() => navigate(-1)}>Назад</Button>
                <Button cn="header__button-exit" outlined onClick={() => handleLogout()}>Выход</Button>
                <IconButton cn={clsx("header__button-exit-icon")} src="/img/ic_exit.svg" onClick={() => handleLogout()} />
            </div>

            {children}

        </header>
    )
}

export default Header