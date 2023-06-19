import { HomeStyled } from "./styled";
import cover from '../../assets/img/cover.jpg'
import profile from '../../assets/img/profile.png'
import { Link, Outlet } from "react-router-dom";

export const Home = () => {

    return (
        <HomeStyled>
            <div className="container">
                <section className="imgsProfile">
                    <img className="cover" src={cover} alt="cover image" />
                    <div className="profile">
                        <img src={profile} alt="profile image" />
                        <h3>Lily</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                </section>
                <section className="nav">
                    <Link to='links'>Links</Link>
                    <Link to='photos'>Photos</Link>
                    <Link to='save'>Save</Link>
                </section>
                <section className="content">
                    <Outlet />
                </section>
            </div>
        </HomeStyled>
    )
}