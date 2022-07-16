import { Twitter } from "providers";

interface IHashtag {
    id: string;
    author_id: string;
    text: string;
}

interface ITwitterUser {
    id: string;
    name: string;
    profile_image_url: string;
    username: string;
}

type THashtagsResponse = {
    data: IHashtag[];
    includes: {
        users: ITwitterUser[];
    };
}

export type THashtags = {
    id: string,
    author_id: string,
    text: string,
    user: {
        id: string;
        name: string;
        profile_image_url: string;
        username: string;
    }
}

async function getHashtags(hashtagQuery: string) {
    try {
        const hashtagResponse = await Twitter.get<THashtagsResponse>("/recent", {
            params: {
                query: hashtagQuery+" has:hashtags -is:retweet -is:quote has:images",
                expansions: "author_id,attachments.media_keys",
                "user.fields": "profile_image_url",
                "media.fields": "type,url,width,height",
                "tweet.fields": "source"
            },
        });

        const hashtags = await hashtagResponse.data;
        const users = await hashtags.includes.users;

        return<THashtags[]> hashtags.data.map(hashtag => ({
            id: hashtag.id,
            author_id: hashtag.author_id,
            text: hashtag.text,
            user: users.find(user => user.id === hashtag.author_id),
        }));

    } catch (error) {
        console.log(error);
    }
}

export const HashtagsService = {
    getHashtags
};
