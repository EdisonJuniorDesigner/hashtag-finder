import React, { useEffect, useState } from 'react'

import { Container, Title, Subtitle, Hero, Developers } from "./styles";
import aboutIllustration from "assets/img/about-ilustration.svg";
import DevCard from 'components/DevCard';
import { AboutContentService, TDevs } from 'services';

type TDev = {
  id: string,
  name: string,
  description: string,
  github: string,
  email: string,
  linkedin: string,
  avatar: string,
};

export const About = () => {

  const [developersList, setDevelopersList] = useState<TDev[]>([]);
  const [aboutContent, setAboutContent] = useState<string|null>(null);

  const { getAllDevs, getAboutContent } = AboutContentService;

  useEffect(() => {
    getAllDevs().then(res => setDevelopersList(res));
    getAboutContent().then(res => setAboutContent(res));
  }, []);

  return (
    <Container>

      <Hero>
        <div className="about-text">
          <Title>Sobre o projeto</Title>
          <p>
            { aboutContent ? aboutContent : 'Carregando...' }
          </p>
        </div>
        <div className="about-image">
          <img src={aboutIllustration} alt=""/>
        </div>
      </Hero>

      <Developers>
        <Subtitle>Quem somos</Subtitle>

        <div className="card-grid">
          {
            developersList.map((developersList, index) => (
              <DevCard key={index} {...developersList} />
            ))
          }

        </div>
      </Developers>

    </Container>
  )
}
