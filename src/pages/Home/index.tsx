import React, { useState, useRef, useEffect } from "react";

import { Container } from "./styles";
import IconSearch from "../../assets/img/icon-search.svg";

import { useMediaQuery } from "react-responsive";

import { HashtagsService, THashtags, SearchesService } from "services";

import { Lightbox } from "components/Lightbox";

export const Home = () => {
    const isMobile = useMediaQuery({ maxWidth: 700 });

    const [current, setCurrent] = useState("tweets");
    const tweetsRef = useRef<HTMLButtonElement>(null);
    const imagesRef = useRef<HTMLButtonElement>(null);

    const [tweetQuery, setTweetQuery] = useState("");
    const [inputQuery, setInputQuery] = useState("");
    const [maxResults, setMaxResults] = useState(10);

    const [selectedTweet, setSelectedTweet] = useState<THashtags | null>(null);
    const [showLightbox, setShowLightbox] = useState(true);

    const [tweets, setTweets] = useState<THashtags[] | []>([]);
    const [loading, setLoading] = useState(true);

    const { getHashtags } = HashtagsService;
    const { postSearch } = SearchesService;

    const handleToggle = () => {
        if (current === "tweets") {
            tweetsRef.current?.focus();
            imagesRef.current?.blur();
            return;
        }
        imagesRef.current?.focus();
        tweetsRef.current?.blur();
    };

    // * Possível Solução Hashtag *
    // const handleFixHashtag = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setTweetQuery(
    //         e.target.value.replace(/[^a-zA-Z0-9_]/g, '').replace(' ', ''),
    //     );
    // }

    const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && tweetQuery.length > 0) {
            handleSend();
            return false;
        }

        return false;
    };

    const handleSend = () => {
        setLoading(true);
        setMaxResults(10);
        setInputQuery(tweetQuery);
        postSearch(tweetQuery);
    };

    const handleEndOfPage = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        ) return;

        setMaxResults(maxResults => maxResults + 10);
        if (tweetQuery.length > 0) {
            setLoading(true);
        }
    };

    useEffect(() => {
        handleToggle();
    }, [current]);

    useEffect(() => {
        window.addEventListener("scroll", handleEndOfPage);
        return () => window.removeEventListener("scroll", handleEndOfPage);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            getHashtags(tweetQuery, maxResults)
                .then((res) => setTweets(res))
                .then(() => setLoading(false));
            setLoading(false);
        }, 1000);
    }, [maxResults]);

    useEffect(() => console.log(maxResults), [maxResults]);
    useEffect(() => console.log(showLightbox), [showLightbox]);

    return (
        <Container>
            <Lightbox show={showLightbox} setShow={setShowLightbox} tweet={selectedTweet} />
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
                        <form onSubmit={(e) => e.preventDefault()}>
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
                                onChange={(e) => setTweetQuery(e.target.value)}
                                onKeyPress={(e) => handleChange(e)}
                            />
                        </form>
                    </div>
                </div>
                <div className="content">
                    {!isMobile ? (
                        <>
                            {inputQuery && (
                                <h2>
                                    Exibindo os {maxResults} resultados mais
                                    recentes para #{inputQuery}
                                </h2>
                            )}
                            <div className="content-twitter">
                                <div className="content-twitter-images">
                                    {tweets?.map((tweet) => {
                                              return (
                                                  <div
                                                      key={tweet.id}
                                                      className="twitter-image"
                                                      style={{
                                                          backgroundImage: `url(${tweet.media.url})`,
                                                          cursor: "pointer",
                                                      }}
                                                      onClick={() => {
                                                        setSelectedTweet(tweet);
                                                        setShowLightbox(true)
                                                      }}
                                                  >
                                                      <div className="twitter-image-info">
                                                          <p>postador por:</p>
                                                          <span>
                                                              {tweet.user.name}
                                                          </span>
                                                      </div>
                                                  </div>
                                              );
                                          })}
                                </div>

                                <div className="content-twitter-tweets">
                                    {tweets?.map((tweet) => {
                                              return (
                                                  <div
                                                      key={tweet.id}
                                                      className="twitter-tweet"
                                                  >
                                                      <img
                                                          src={
                                                              tweet.user
                                                                  .profile_image_url
                                                          }
                                                          alt="Foto de perfil"
                                                          onError={(e) => {
                                                              e.currentTarget.src =
                                                                  "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
                                                              e.currentTarget.onerror =
                                                                  null;
                                                          }}
                                                      />
                                                      <div>
                                                          <div className="tweet-head">
                                                              <p>
                                                                  {
                                                                      tweet.user
                                                                          .name
                                                                  }
                                                              </p>
                                                              <span>
                                                                  @
                                                                  {
                                                                      tweet.user
                                                                          .username
                                                                  }
                                                              </span>
                                                          </div>
                                                          <p className="tweet">
                                                              {tweet.text}
                                                          </p>
                                                          <a
                                                              href={`https://twitter.com/${tweet.user.username}/status/${tweet.id}`}
                                                              target="_blank"
                                                              rel="noreferrer"
                                                          >
                                                              Ver mais no
                                                              Twitter
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
                                        {tweets?.map((tweet) => {
                                                  return (
                                                      <div
                                                          key={tweet.id}
                                                          className="twitter-tweet"
                                                      >
                                                          <img
                                                              src={
                                                                  tweet.user
                                                                      .profile_image_url
                                                              }
                                                              alt="Foto de perfil"
                                                              onError={(e) => {
                                                                  e.currentTarget.src =
                                                                      "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
                                                                  e.currentTarget.onerror =
                                                                      null;
                                                              }}
                                                          />
                                                          <div>
                                                              <div className="tweet-head">
                                                                  <p>
                                                                      UserName
                                                                  </p>
                                                                  <span>
                                                                      @
                                                                      {
                                                                          tweet
                                                                              .user
                                                                              .username
                                                                      }
                                                                  </span>
                                                              </div>
                                                              <p className="tweet">
                                                                  {tweet.text}
                                                              </p>
                                                              <a
                                                                  href={`https://twitter.com/${tweet.user.username}/status/${tweet.id}`}
                                                                  target="_blank"
                                                                  rel="noreferrer"
                                                              >
                                                                  Ver mais no
                                                                  Twitter
                                                              </a>
                                                          </div>
                                                      </div>
                                                  );
                                              })}
                                    </div>
                                )}
                                {current === "images" && (
                                    <div className="content-twitter-images">
                                        {tweets?.map((tweet) => {
                                                  return (
                                                      <div
                                                          key={tweet.id}
                                                          className="twitter-image"
                                                          style={{
                                                              backgroundImage: `url(${tweet.media.url})`,
                                                              backgroundPosition:
                                                                  "center",
                                                          }}
                                                        >
                                                          <div className="twitter-image-info">
                                                              <p>
                                                                  postador por:
                                                              </p>
                                                              <span>
                                                                  @
                                                                  {
                                                                      tweet.user
                                                                          .username
                                                                  }
                                                              </span>
                                                          </div>
                                                      </div>
                                                  );
                                              })}
                                    </div>
                                )}
                            </div>
                        </>
                    )}
            {loading && (
                <div className="loading"> 
                    <p>Carregando...</p>
                </div>
            )}
                </div>
            </div>
        </Container>
    );
};
