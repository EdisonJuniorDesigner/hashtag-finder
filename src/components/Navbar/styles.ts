import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    backdrop-filter: blur(30px);
    background: rgba(10, 23, 68, 0.8);
    box-shadow: 0px 0px 10px rgba(85, 56, 238, 0.12);
    position: sticky;
    top: 0;
    width: 100%;

    .navbar-logo {
        img {
            max-width: 239px;
        }
    }

    .navbar-button {
        display: flex;
        align-items: center;

        .navbar-btn-about,
        .navbar-btn-login {
            display: flex;
            align-items: center;
            border-radius: 25px;
            border: none;
            padding: 8px 16px;
            width: 100%;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 15px;
            letter-spacing: 2px;
            cursor: pointer;
            transition: background-color 0.3s ease;

            img {
                margin-right: 10px;
                width: 10px;
            }
        }

        .navbar-btn-about {
            background-color: #72efdb;
            color: #0a1744;
        }

        .navbar-btn-about:hover {
            background-color: #2ba08d;
        }

        .navbar-btn-login {
            margin-left: 35px;
            background-color: #1e3e7b;
            color: #fff;
        }

        .navbar-btn-login:hover {
            background-color: #0c2a60;
        }
    }
`;
