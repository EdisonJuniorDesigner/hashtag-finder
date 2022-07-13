import React, { useEffect, useState } from 'react'

import { Container, Title, Subtitle, Hero, Developers } from "./styles";
import aboutIllustration from "assets/img/about-ilustration.svg";
import DevCard from 'components/DevCard';
import { AboutContentService, TDevs } from 'services';

// let developers = [
//   {
//     name: "Italo Bruno",
//     description: "Desenvolvedor Front-end, aparesentação de projeto",
//     avatar: "https://github.com/italocabral.png",
//     github: "https://github.com/italocabral",
//     linkedin: "https://www.linkedin.com/in/bruno-italo-cabral/",
//     email: "g1brunoyokima@hotmail.com"
//   },
//   {
//     name: "Emanuel Azevedo",
//     description: "Desenvolvedor Front-end, aparesentação de projeto",
//     avatar: "https://github.com/nashEm8.png",
//     github: "https://github.com/nashEm8",
//     linkedin: "https://www.linkedin.com/in/emanuel-azevedo-7668b91b7/",
//     email: "emanuel82016@outlook.com"
//   },
//   {
//     name: "Edison Júnior",
//     description: "Desenvolvedor Front-end, aparesentação de projeto",
//     github: "https://github.com/EdisonJuniorDesigner",
//     email: "mage1232010@gmail.com",
//     linkedin: "https://www.linkedin.com/in/edison-junior/",
//     avatar: "https://github.com/EdisonJuniorDesigner.png",
//   }
// ];

export const About = () => {

  const [developersList, setDevelopersList] = useState<any>([]);

  const { getAllDevs } = AboutContentService;

  useEffect(() => {
    const devs = getAllDevs()
    setDevelopersList(devs);
  }, []);

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
            // developersList.map((developer, index) => (
            //   <DevCard key={index} {...developer} />
            // ))
          }

        </div>
      </Developers>

    </Container>
  )
}
