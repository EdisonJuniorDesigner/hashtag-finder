import styled from "styled-components";

import backgroundHero from "../../assets/img/hero-bg.jpg";

export const Container = styled.div`
    height: 100vh;
    background-image: url(${backgroundHero});
    margin: 0 auto;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: 60% 0;
    background-size: cover;

    .container-login {
        max-width: 500px;
        margin: auto;
        backdrop-filter: blur(30px);
        background: rgba(10, 23, 68, 0.6);
        padding: 40px;
        margin-top: 100px;
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 50%;
        justify-content: center;

        h2 {
            margin: 0;
            margin-top: 30px;
            font-size: 28px;
            color: #72efdb;
        }

        form {
            display: inline-block;
            width: 100%;
            flex-direction: column;
            text-align: center;
            margin: 30px 0;

            input {
                width: 100%;
                padding: 10px;
                margin-top: 20px;
                background: none;
                font-size: 14px;
                color: #fff;
                border: none;
                border-bottom: 1.5px solid #ffffff24;
            }

            input::placeholder {
                color: #fff;
            }

            button {
                width: 35%;
                padding: 10px 5px;
                margin-top: 50px;
                border-radius: 50px;
                border: none;
                background-color: #72efdb;
                color: #0a1744;
                text-transform: uppercase;
                font-weight: 500;
                font-size: 14px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            button:hover {
                background-color: #2ba08d;
            }
        }
    }

    @media (max-width: 530px) {
        .container-login {
            margin: auto 20px;
        }
    }
`;
