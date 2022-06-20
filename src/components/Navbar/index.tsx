import { Container } from "./styles";
import Logo from "../../assets/img/logo.svg";
import IconInfo from "../../assets/img/icon-info-circle.svg";
import IconLogin from "../../assets/img/icon-user-alt.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <Container>
            <div className="navbar-logo">
                <img src={Logo} alt="logo hashtagfinder" />
            </div>
            <div className="navbar-button">
                <Link to="/about" >
                    <button className="navbar-btn-about">
                        <img src={IconInfo} alt="" />
                        sobre
                    </button>
                </Link>
                <button className="navbar-btn-login">
                    <img src={IconLogin} alt="" />
                    login
                </button>
            </div>
        </Container>
    );
};
