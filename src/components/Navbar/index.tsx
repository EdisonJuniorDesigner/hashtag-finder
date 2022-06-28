import { useEffect, useState } from "react";
import { Container } from "./styles";
import Logo from "../../assets/img/logo.svg";
import IconInfo from "../../assets/img/icon-info-circle.svg";
import IconHome from "../../assets/img/icon-home.svg";
import IconLogin from "../../assets/img/icon-user-alt.svg";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const [path, setPath] = useState("");
    const location = useLocation();

    useEffect(() => {
        setPath(location.pathname);
    }, [location]);

    return (
        <Container>
            <div className="navbar-logo">
                <img src={Logo} alt="logo hashtagfinder" />
            </div>
            <div className="navbar-button">
                {path === "/" ? (
                    <Link to="/about">
                        <button className="navbar-btn-about">
                            <img src={IconInfo} alt="" />
                            sobre
                        </button>
                    </Link>
                ) : (
                    <Link to="/">
                        <button className="navbar-btn-about">
                            <img src={IconHome} alt="" />
                            home
                        </button>
                    </Link>
                )}
                {path === "/login" ? null : (
                    <Link to="/login">
                        <button className="navbar-btn-login">
                            <img src={IconLogin} alt="" />
                            login
                        </button>
                    </Link>
                )}
            </div>
        </Container>
    );
};
