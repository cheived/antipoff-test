import clsx from "clsx"
import { Header } from "../../components/Header"
import { UserList } from "../../modules/UserList"
import { Button } from "../../ui/Button"
import "./Home.scss"
import { useState } from "react"


const Home = () => {
    const [offset, setOffset] = useState(1);
    return (
        <div className={clsx("home")}>
            <Header cn="home__header" >
                <div className="home__title-wrapper">
                    <h1 className="home__h1">Наша команда</h1>
                    <h2 className="home__h2">Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.</h2>
                </div>
            </Header>
            <UserList offset={offset} />
            {offset < 2 && <Button outlined cn={clsx("home__more-button")} onClick={() => setOffset(state => state + 1)}>Показать ещё</Button>}
        </div>


    )
}

export default Home