import { useState, Component, useRef, useEffect } from "react";
import { Container } from "./styles";
import Img from "../../assets/img/img-01.jpg";
import ImgProfile from "../../assets/img/img-profile.png";
import IconSearch from "../../assets/img/icon-search.svg";
import { useMediaQuery } from "react-responsive";

export const Home = () => {
    const isMobile = useMediaQuery({ maxWidth: 700 });
    const [current, setCurrent] = useState("tweets");

    const tweetsRef = useRef<HTMLButtonElement>(null);
    const imagesRef = useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        if(current === "tweets") {
            tweetsRef.current?.focus();
            imagesRef.current?.blur();
            return;
        }
        imagesRef.current?.focus();
        tweetsRef.current?.blur();
    }

    useEffect(() => {
        handleToggle();
    }, [current]);

    return (
        <Container>
            <div className="container-home">
                <div className="hero">
                    <div className="title">
                        <h1>Encontre hashtags de maneira fácil.</h1>
                        <p>
                            Digite o que deseja no campo de buscas e confira os
                            resultados do Twitter abaixo
                        </p>
                    </div>
                    <div className="search">
                        <form action="">
                            <img
                                src={IconSearch}
                                alt="search"
                                className="search-img"
                            />
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Buscar..."
                            />
                        </form>
                    </div>
                </div>
                <div className="content">
                    {!isMobile ? (
                        <>
                            <h2>
                                Exibindo os 10 resultados mais recentes para
                                #natureza
                            </h2>
                            <div className="content-twitter">
                                <div className="content-twitter-images">
                                    <div
                                        className="twitter-image"
                                        style={{
                                            backgroundImage: `url(${Img})`,
                                        }}
                                    >
                                        <div className="twitter-image-info">
                                            <p>postador por:</p>
                                            <span>@twitterusername</span>
                                        </div>
                                    </div>
                                    <div
                                        className="twitter-image"
                                        style={{
                                            backgroundImage: `url(${Img})`,
                                        }}
                                    >
                                        <div className="twitter-image-info">
                                            <p>postador por:</p>
                                            <span>@twitterusername</span>
                                        </div>
                                    </div>
                                    <div
                                        className="twitter-image"
                                        style={{
                                            backgroundImage: `url(${Img})`,
                                        }}
                                    >
                                        <div className="twitter-image-info">
                                            <p>postador por:</p>
                                            <span>@twitterusername</span>
                                        </div>
                                    </div>
                                    <div
                                        className="twitter-image"
                                        style={{
                                            backgroundImage: `url(${Img})`,
                                        }}
                                    >
                                        <div className="twitter-image-info">
                                            <p>postador por:</p>
                                            <span>@twitterusername</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="content-twitter-tweets">
                                    <div className="twitter-tweet">
                                        <img
                                            src={ImgProfile}
                                            alt="Foto de perfil"
                                        />
                                        <div>
                                            <div className="tweet-head">
                                                <p>UserName</p>
                                                <span>@twitterusername</span>
                                            </div>
                                            <p className="tweet">
                                                Lorem ipsum dolor sit amet,
                                                consetetur sadipscing elitr, sed
                                                diam nonumy eirmod tempor
                                                invidunt...
                                            </p>
                                            <a href="/">Ver mais no Twitter</a>
                                        </div>
                                    </div>
                                    <div className="twitter-tweet">
                                        <img
                                            src={ImgProfile}
                                            alt="Foto de perfil"
                                        />
                                        <div>
                                            <div className="tweet-head">
                                                <p>UserName</p>
                                                <span>@twitterusername</span>
                                            </div>
                                            <p className="tweet">
                                                Lorem ipsum dolor sit amet,
                                                consetetur sadipscing elitr, sed
                                                diam nonumy eirmod tempor
                                                invidunt...
                                            </p>
                                            <a href="/">Ver mais no Twitter</a>
                                        </div>
                                    </div>
                                    <div className="twitter-tweet">
                                        <img
                                            src={ImgProfile}
                                            alt="Foto de perfil"
                                        />
                                        <div>
                                            <div className="tweet-head">
                                                <p>UserName</p>
                                                <span>@twitterusername</span>
                                            </div>
                                            <p className="tweet">
                                                Lorem ipsum dolor sit amet,
                                                consetetur sadipscing elitr, sed
                                                diam nonumy eirmod tempor
                                                invidunt...
                                            </p>
                                            <a href="/">Ver mais no Twitter</a>
                                        </div>
                                    </div>
                                    <div className="twitter-tweet">
                                        <img
                                            src={ImgProfile}
                                            alt="Foto de perfil"
                                        />
                                        <div>
                                            <div className="tweet-head">
                                                <p>UserName</p>
                                                <span>@twitterusername</span>
                                            </div>
                                            <p className="tweet">
                                                Lorem ipsum dolor sit amet,
                                                consetetur sadipscing elitr, sed
                                                diam nonumy eirmod tempor
                                                invidunt...
                                            </p>
                                            <a href="/">Ver mais no Twitter</a>
                                        </div>
                                    </div>
                                    <div className="twitter-tweet">
                                        <img
                                            src={ImgProfile}
                                            alt="Foto de perfil"
                                        />
                                        <div>
                                            <div className="tweet-head">
                                                <p>UserName</p>
                                                <span>@twitterusername</span>
                                            </div>
                                            <p className="tweet">
                                                Lorem ipsum dolor sit amet,
                                                consetetur sadipscing elitr, sed
                                                diam nonumy eirmod tempor
                                                invidunt...
                                            </p>
                                            <a href="/">Ver mais no Twitter</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                        </>
                    ) : (
                        <>
                            <div className="content-twitter">
                                <div className="content-head">
                                    <button
                                        ref={tweetsRef}
                                        className="content-head-tweets"
                                        onBlur={() => handleToggle()}
                                        onClick={() =>
                                            setCurrent("tweets")
                                        }>
                                        Tweets
                                    </button>
                                    <button
                                        ref={imagesRef}
                                        className="content-head-images"
                                        onBlur={() => handleToggle()}
                                        onClick={() => setCurrent("images")}>
                                        Imagens
                                    </button>
                                </div>

                                {
                                    current === "tweets" &&
                                        (<div className="content-twitter-tweets">
                                            <div className="twitter-tweet">
                                                <img
                                                    src={ImgProfile}
                                                    alt="Foto de perfil"
                                                />
                                                <div>
                                                    <div className="tweet-head">
                                                        <p>UserName</p>
                                                        <span>@twitterusername</span>
                                                    </div>
                                                    <p className="tweet">
                                                        Lorem ipsum dolor sit amet,
                                                        consetetur sadipscing elitr, sed
                                                        diam nonumy eirmod tempor
                                                        invidunt...
                                                    </p>
                                                    <a href="/">Ver mais no Twitter</a>
                                                </div>
                                            </div>
                                        </div>)
                                }
                                {
                                    current === "images" &&
                                    (
                                        <div className="content-twitter-images">
                                            <h1>imagens</h1>
                                        </div>

                                    )
                                }
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Container>
    );
}
