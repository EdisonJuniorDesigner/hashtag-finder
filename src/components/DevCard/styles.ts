import styled from 'styled-components';
import { Github } from "@styled-icons/bootstrap";
import { Mail } from "@styled-icons/fluentui-system-filled";
import { Linkedin } from "@styled-icons/fa-brands";


export const Container = styled.div`
  width: 280px;
  height: 390px;
  background-color: #0B1A49;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 36px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.h3`
  font-size: 21px;
  font-weight: bold;
  color: #72EFDB;
`;

export const ImageWrapper = styled.div`
  height: 100px;
  width: 100px;
  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const CardDescription = styled.div`
  width : 100%;

  p{
    font-size: 16px;
    line-height: 25px;
  }

`;

export const CardLink = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  margin-top: 20px;
  a{
    color: #72EFDB;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover{
      opacity: 0.8;
    }
  }

`;

export const GithubIcon = styled(Github)`
  width: 24px;
  height: 24px;
`;

export const MailIcon = styled(Mail)`
  width: 24px;
  height: 24px;
`;

export const LinkedinIcon = styled(Linkedin)`
  width: 24px;
  height: 24px;
`;
