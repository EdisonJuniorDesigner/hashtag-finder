import { airTableBase } from "providers";

interface IHashtag {
  squad: string;
  hashtag: string;
  data: number;
}

export type THashtags = IHashtag[];

const getAllHashtags = async () => {
  const hashtags = await airTableBase("Hashtags")
    .select({
      maxRecords: 5,
      view: "Grid view"
    }).all();

  return hashtags.map(hashtag => ({
    squad: hashtag.get("05-22"),
    hashtag: hashtag.get("Hashtag"),
    data: hashtag.get("Data")
  }));
}

export const HashtagsService = {
  getAllHashtags
}
