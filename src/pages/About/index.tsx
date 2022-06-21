import React, { useState } from 'react'

import { Container, Title, Subtitle, Hero, Developers } from "./styles";
import aboutIllustration from "assets/img/about-ilustration.svg";
import DevCard from 'components/DevCard';

let developers = [
  {
    name: "Italo Bruno",
    description: "Desenvolvedor Front-end, aparesentação de projeto",
    avatar: "https://github.com/italocabral.png",
    github: "https://github.com/italocabral",
    linkedin: "https://www.linkedin.com/in/bruno-italo-cabral/",
    email: "g1brunoyokima@hotmail.com"
  },
  {
    name: "Emanuel Azevedo",
    description: "Desenvolvedor Front-end, aparesentação de projeto",
    avatar: "https://github.com/nashEm8.png",
    github: "https://github.com/nashEm8",
    linkedin: "https://www.linkedin.com/in/emanuel-azevedo-7668b91b7/",
    email: "emanuel82016@outlook.com"
  },
  {
    name: "Edison Júnior",
    description: "Desenvolvedor Front-end, aparesentação de projeto",
    avatar: "https://github.com/EdisonJuniorDesigner.png",
    github: "https://github.com/EdisonJuniorDesigner",
    linkedin: "https://www.linkedin.com/in/edison-junior/",
    email: "mage1232010@gmail.com"
  }
];

export const About = () => {

  const [developersList, setDevelopersList] = useState(developers);

  return (
    <Container>

      <Hero>
        <div className="about-text">
          <Title>Sobre o projeto</Title>
          <p className=''>
            Desenvolvido por um grupo de desenvolvedores, com paixão pela praticidade e informação, o HashTag Finder é uma aplicação com o intuito de reunir os trending topics que você desejar, através de uma busca rápida e fácil.<br/> Busque por hashtags, palavras-chave, ou termos mais específicos, e veja o que está acontecendo no momento em tempo real.
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
            developersList.map((developer, index) => (
              <DevCard key={index} {...developer} />
            ))
          }

        </div>
      </Developers>

    </Container>
  )
}
