import React from 'react';

import {
  Container,
  CardTitle,
  ImageWrapper,
  CardDescription,
  CardLink,
  GithubIcon,
  LinkedinIcon,
  MailIcon
} from './styles'

type Props = {
  name: string;
  description: string;
  avatar: string;
  github: string;
  linkedin: string;
  email: string;
}

export const DevCard: React.FC<Props> = ({ name, description, avatar, github, linkedin, email }) => (
  <Container>
    <ImageWrapper>
      <img src={avatar} alt=""/>
    </ImageWrapper>
    <CardTitle>
      {name}
    </CardTitle>
    <CardDescription>
      {description}
    </CardDescription>
    <CardLink>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <GithubIcon />
      </a>
      <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
        <MailIcon />
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <LinkedinIcon />
      </a>
    </CardLink>
  </Container>
);
