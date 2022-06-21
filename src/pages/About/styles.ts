import styled from "styled-components";

import heroBackground from "assets/img/about-hero-bg.jpg";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  color: #fff;
  background-image: linear-gradient(to bottom, transparent 0%, #0a1744 95%),
      url(${heroBackground});
  background-repeat: no-repeat;
  background-position: 0 -30%;
  background-size: cover;
  backdrop-filter: blur(30px);
  padding: 24px 36px;
`;

export const Title = styled.h2`
  font-size: 64px;
  font-weight: bold;
  font-family: "Rubik";
  font-weight: 700;
  margin: 0 0 40px 0;

  @media (max-width: 1280px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {}

`;

export const Subtitle = styled.h2`
  font-size: 54px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: -20px;
  }
`;

export const Hero = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 64px 0;
  height: calc(100vh - 70px);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 80px 0;

    .about-text, .about-image {
      width: 100% !important;
      margin: 24px 0;
    }
  }

  .about-text{
    width: 45%;

    p{
      font-weight: 100;
      font-size: 18px;
      line-height: 32px;
      text-align: justify;
    }
  }

  .about-image {
    width: 45%;
    height: 80%;
    margin-top: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Developers = styled.div`
    width: 70%;
    margin: 0 auto;
    .card-grid{
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      justify-items: center;
      margin: 40px auto;
    }

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 120px;
    }

`;
