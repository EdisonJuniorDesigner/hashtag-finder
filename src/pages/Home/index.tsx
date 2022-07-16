import React, { useState, useRef, useEffect } from "react";
import { Container } from "./styles";
import Img from "../../assets/img/img-01.jpg";
import ImgProfile from "../../assets/img/img-profile.png";
import IconSearch from "../../assets/img/icon-search.svg";
import { useMediaQuery } from "react-responsive";
import { HashtagsService, THashtags } from "services";

export const Home = () => {
    const isMobile = useMediaQuery({ maxWidth: 700 });

    const [current, setCurrent] = useState("tweets");
    const tweetsRef = useRef<HTMLButtonElement>(null);
    const imagesRef = useRef<HTMLButtonElement>(null);

    const [showQuery, setShowQuery] = useState(false);

    const [tweetQuery, setTweetQuery] = useState("");
    const [tweets, setTweets] = useState<THashtags[] | undefined>();
    const [loading, setLoading] = useState(true);

    const { getHashtags } = HashtagsService;

    const handleToggle = () => {
        if (current === "tweets") {
            tweetsRef.current?.focus();
            imagesRef.current?.blur();
            return;
        }
        imagesRef.current?.focus();
        tweetsRef.current?.blur();
    };

    const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setShowQuery(false);
        if(e.key === "Enter" && tweetQuery.length > 0) {
            handleSend();
            return false;
        }
        return false;
    }

    const handleSend = () => {
        setLoading(true);
        getHashtags(tweetQuery).then(res => setTweets(res));
        setShowQuery(true);
        setLoading(false);
    }

    useEffect(() => {
        handleToggle();
    }, [current]);

    useEffect(() => {
        getHashtags("natureza").then(res => setTweets(res));
        setLoading(false);
    }, []);

    useEffect(() => console.log(tweets), [tweets]);

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
                        <form onSubmit={e => e.preventDefault()}>
                            <img
                                src={IconSearch}
                                alt="search"
                                className="search-img"
                                onClick={() => handleSend()}
                            />
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Buscar..."
                                value={tweetQuery}
                                onChange={e => setTweetQuery(e.target.value)}
                                onKeyPress={e => handleChange(e)}
                            />
                        </form>
                    </div>
                </div>
                <div className="content">
                    {!isMobile ? (
                        <>
                            { showQuery && (
                                <h2>
                                    Exibindo os 10 resultados mais recentes para
                                    #{tweetQuery}
                                </h2>
                            ) }
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
                                    {loading ? "Carregando..." : tweets?.map((tweet) => {
                                        return (
                                            <div className="twitter-tweet">
                                                <img
                                                    src={
                                                        tweet.user.profile_image_url
                                                    }
                                                    alt="Foto de perfil"
                                                />
                                                <div>
                                                    <div className="tweet-head">
                                                        <p>
                                                            {tweet.user.name}
                                                        </p>
                                                        <span>
                                                            @
                                                            {tweet.user.username}
                                                        </span>
                                                    </div>
                                                    <p className="tweet">
                                                        {tweet.text}
                                                    </p>
                                                    <a href="">
                                                        Ver mais no Twitter
                                                    </a>
                                                </div>
                                            </div>
                                        );
                                    })}
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
                                        onClick={() => setCurrent("tweets")}
                                    >
                                        Tweets
                                    </button>
                                    <button
                                        ref={imagesRef}
                                        className="content-head-images"
                                        onBlur={() => handleToggle()}
                                        onClick={() => setCurrent("images")}
                                    >
                                        Imagens
                                    </button>
                                </div>

                                {current === "tweets" && (
                                    <div className="content-twitter-tweets">
                                        <div className="twitter-tweet">
                                            <img
                                                src={ImgProfile}
                                                alt="Foto de perfil"
                                            />
                                            <div>
                                                <div className="tweet-head">
                                                    <p>UserName</p>
                                                    <span>
                                                        @twitterusername
                                                    </span>
                                                </div>
                                                <p className="tweet">
                                                    Lorem ipsum dolor sit amet,
                                                    consetetur sadipscing elitr,
                                                    sed diam nonumy eirmod
                                                    tempor invidunt...
                                                </p>
                                                <a href="/">
                                                    Ver mais no Twitter
                                                </a>
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
                                                    <span>
                                                        @twitterusername
                                                    </span>
                                                </div>
                                                <p className="tweet">
                                                    Lorem ipsum dolor sit amet,
                                                    consetetur sadipscing elitr,
                                                    sed diam nonumy eirmod
                                                    tempor invidunt...
                                                </p>
                                                <a href="/">
                                                    Ver mais no Twitter
                                                </a>
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
                                                    <span>
                                                        @twitterusername
                                                    </span>
                                                </div>
                                                <p className="tweet">
                                                    Lorem ipsum dolor sit amet,
                                                    consetetur sadipscing elitr,
                                                    sed diam nonumy eirmod
                                                    tempor invidunt...
                                                </p>
                                                <a href="/">
                                                    Ver mais no Twitter
                                                </a>
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
                                                    <span>
                                                        @twitterusername
                                                    </span>
                                                </div>
                                                <p className="tweet">
                                                    Lorem ipsum dolor sit amet,
                                                    consetetur sadipscing elitr,
                                                    sed diam nonumy eirmod
                                                    tempor invidunt...
                                                </p>
                                                <a href="/">
                                                    Ver mais no Twitter
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {current === "images" && (
                                    <div className="content-twitter-images">
                                        <div
                                            className="twitter-image"
                                            style={{
                                                backgroundImage: `url(${Img})`,
                                                backgroundPosition: "center",
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
                                                backgroundPosition: "center",
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
                                                backgroundPosition: "center",
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
                                                backgroundPosition: "center",
                                            }}
                                        >
                                            <div className="twitter-image-info">
                                                <p>postador por:</p>
                                                <span>@twitterusername</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Container>
    );
};
