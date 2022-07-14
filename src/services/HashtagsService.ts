import { Airtable } from "providers";

interface IHashtag {
  squad: string;
  hashtag: string;
  data: number;
}

export type THashtags = IHashtag[];

const getAllHashtags = async () => {
  const hashtags = await Airtable("Hashtags")
}

export const HashtagsService = {
  getAllHashtags
}
