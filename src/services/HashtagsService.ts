import { Api } from "providers";

interface IHashtag {
  squad: string;
  hashtag: string;
  data: number;
}

export type THashtags = IHashtag[];

const getAllHashtags = async () => (await Api.get<THashtags>("/Buscas")).data;

export const HashtagsService = {
  getAllHashtags
}
