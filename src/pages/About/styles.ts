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
  padding: 100px 50px;
`;

export const Title = styled.h2`
  font-size: 80px;
  font-weight: bold;
  font-family: "Rubik";
  font-weight: 700;
  margin: 40px 0;

`;

export const Subtitle = styled.h2`
  font-size: 54px;
  font-weight: bold;
`;

export const Hero = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 0 30px;

  .about-text{
    width: 45%;
    p{
      font-weight: normal;
      font-size: 20px;
    }
  }

  .about-image {
    width: 45%;
    img {
      width: 640px;
      height: 540px;
    }
  }
`;

export const Developers = styled.div`
    width: 70%;
    margin: 0 auto;
  .card-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    margin: 40px auto;
  }
`;
