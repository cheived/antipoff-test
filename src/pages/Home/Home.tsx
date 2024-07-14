import { Header } from "../../components/Header"
// import { UserCard } from "../../modules/UserCard"
import { UserList } from "../../modules/UserList"
import "./Home.scss"


const Home = () => {
    return (
        <div className="home">
            <Header cn="home__header">
                <div className="home__title-wrapper">
                    <h1 className="home__h1">Наша команда</h1>
                    <h2 className="home__h2">Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.</h2>
                </div>
            </Header>
            <UserList />
        </div>


    )
}

export default Home