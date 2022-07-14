import { Twitter } from "providers";

export const getHashtags = async () => {

  try{

    const response = await Twitter.get("/recent", {
      params: {
        query: "natureza",
        expansions: "author_id",
        "user.fields": "profile_image_url"
      }
    });

    console.log(response.data);

  }catch (error) {
    console.log(error);
  }

}




