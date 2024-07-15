import clsx from "clsx"
import { Header } from "../../components/Header"
import "./UserInfo.scss"
import { Avatar } from "../../ui/Avatar"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import fetchUser from "./api/fetchUser"
import IUser from "../../types/user"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"


const UserInfo = () => {
    const { userId } = useParams();
    const currentUser = useSelector((state: RootState) => state.user.user)
    const [user, setUser] = useState<IUser>();
    const [avatarImg, setAvatarImg] = useState("")

    useEffect(() => {
        async function getUser() {
            const user = await fetchUser(userId || 1)
            setUser(user)
            setAvatarImg(user?.avatar || "")
        }
        getUser()
    }, [userId])

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageUrl = reader.result as string;
                setAvatarImg(imageUrl);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={clsx("user-info", user && "user-info_visible")}>
            <Header cn={clsx("user-info__header")} left="Назад" >
                <>
                    <div className="user-info__main-info">
                        <Avatar cn="user-info__avatar" src={avatarImg} width={178} height={178} />

                        <div className="user-info__title-wrapper">
                            <h1 className="user-info__name">{user?.first_name + " " + user?.last_name}</h1>
                            <h2 className="user-info__position">Партнер</h2>
                        </div>
                    </div>
                    {userId == currentUser?.id ? <input className="user-info__avatar-upload" type="file" onChange={(event) => handleFileChange(event)} /> : null}
                </>
            </Header >
            <div className="user-info__description-wrapper">
                <h2 className="user-info__description">
                    <p>
                        Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.
                    </p>
                    <p>
                        В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".
                    </p>
                    <p>
                        Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.
                    </p>
                </h2>
                <span className="user-info__contacts">
                    <span className="user-info__phone-number-wrapper">
                        <img className="user-info__phone-icon" src="/img/ic_phone.svg" />
                        <h2 className="user-info__phone">+7 (954) 333-44-55</h2>
                    </span>
                    <span className="user-info__email-wrapper">
                        <img className="user-info__email-icon" src="/img/ic_mail.svg" />
                        <h2 className="user-info__email">{user?.email}</h2>
                    </span>
                </span>

            </div>
        </div >
    )
}

export default UserInfo