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

export default function DevCard({ name, description, avatar, github, linkedin, email }: Props) {

  const copyValueToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
  }

  return (
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
        <a onClick={() => copyValueToClipboard(email)} target="_blank" rel="noopener noreferrer">
          <MailIcon />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedinIcon />
        </a>
      </CardLink>
    </Container>
  )
}
