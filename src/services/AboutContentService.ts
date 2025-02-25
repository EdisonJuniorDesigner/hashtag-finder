import { Airtable } from "providers";

interface IDev {
    Nome: string;
    Descrição: string;
    Github: string;
    Email: string;
    LinkedIn: string;
    Imagem: [
        {
            url: string;
        }
    ];
}

interface IAboutContent {
    Sobre: string;
}

type TDevsResponse = {
    records: [
        {
            id: string;
            fields: IDev;
            createdTime: string;
        }
    ];
};

interface TAboutContentResponse {
    records: [
        {
            id: string;
            fields: IAboutContent;
            createdTime: string;
        }
    ];
}

export type TDevs = IDev[];

const SQUAD_ID = "05-22";

const getAllDevs = async () => {
    const response = await Airtable.get<TDevsResponse>(`/Equipe?filterByFormula={Squad}="${SQUAD_ID}"`);
    const devs = await response.data;

    return devs.records.map((dev) => ({
        id: dev.id,
        name: dev.fields.Nome,
        description: dev.fields.Descrição,
        github: dev.fields.Github,
        email: dev.fields.Email,
        linkedin: dev.fields.LinkedIn,
        avatar: dev.fields.Imagem[0].url,
    }));
};

const getAboutContent = async () => {
    const response = await Airtable.get<TAboutContentResponse>(`/Projeto?filterByFormula={Squad}="${SQUAD_ID}"`);
    const aboutContent = await response.data;
    return aboutContent.records[0].fields.Sobre;
};

export const AboutContentService = {
    getAllDevs,
    getAboutContent
};
