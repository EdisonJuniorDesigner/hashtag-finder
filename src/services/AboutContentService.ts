import { airTableBase } from "providers";

interface IDev {
  name: string;
  description: string;
  github: string;
  email: string;
  linkedin: string;
  avatar: [{
    url: string;
  }];
}

export type TDevs = IDev[];

const getAllDevs = async () => {
  const response = await airTableBase("Equipe")
    .select({
      maxRecords: 4,
      view: "Grid view"
    }).all();

  const devs = await response.map(dev => ({
    name: dev.get("Nome"),
    description: dev.get("Descrição"),
    github: dev.get("Github"),
    email: dev.get("Email"),
    linkedin: dev.get("LinkedIn"),
    avatar: dev.get("Imagem")
  }));

  return devs;
}

export const AboutContentService = {
  getAllDevs
}