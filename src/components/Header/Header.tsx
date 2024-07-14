import { FC } from "react"
import { Button } from "../../ui/Button"
import "./Header.scss"
import clsx from "clsx"

interface IHeader {
    children: React.ReactElement,
    cn: string
}

const Header: FC<IHeader> = ({ children, cn }) => {
    return (
        <header className={clsx("header", cn)}>
            <Button cn="header__button-left" outlined>12345</Button>
            {children}
            <Button cn="header__button-right" outlined>12345</Button>
        </header>
    )
}

export default Header