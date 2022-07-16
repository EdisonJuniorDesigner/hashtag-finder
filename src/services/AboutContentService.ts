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

interface ILogin {
    Email: string;
    Senha: string;
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

type TLoginResponse = {
    records: [
        {
            id: string;
            fields: ILogin;
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

const getAllDevs = async () => {
    const response = await Airtable.get<TDevsResponse>(
        "/Equipe?view=Grid%20view"
    );
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

const getLoginAccount = async (email: string, password: string) => {
    const response = await Airtable.get<TLoginResponse>(
        "/Login?view=Grid%20view"
    );
    const accounts = await response.data;

    // return accounts.records.map((account) => ({
    //     if(account.fields.Email === email && ){}
    // }))
};

const getAboutContent = async () => {
    const response = await Airtable.get<TAboutContentResponse>(
        "/Projeto?view=Grid%20view"
    );
    const aboutContent = await response.data;

    return aboutContent.records[0].fields.Sobre;
};

export const AboutContentService = {
    getAllDevs,
    getAboutContent,
    getLoginAccount,
};
