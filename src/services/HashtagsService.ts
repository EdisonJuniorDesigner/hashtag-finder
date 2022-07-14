import { Twitter } from "providers";

export const getHashtags = async (tweets: any[]) => {
    try {
        const response = await Twitter.get("/recent", {
            params: {
                query: "natureza",
                expansions: "author_id",
                "user.fields": "profile_image_url",
            },
        });

        // console.log(response.data);
        tweets = response.data;
        console.log("Tweets Log", tweets);
    } catch (error) {
        console.log(error);
    }
};
