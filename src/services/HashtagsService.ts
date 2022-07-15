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
        const response = await Twitter.get<THashtagsResponse>("/recent", {
            params: {
                query: hashtagQuery,
                expansions: "author_id",
                "user.fields": "profile_image_url",
            },
        });

        const hashtags = await response.data;
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

// const getHashtags = async (hashtagQuery: string) => {
//     try {
//         const response = await Twitter.get<THashtagsResponse>("/recent", {
//             params: {
//                 query: hashtagQuery,
//                 expansions: "author_id",
//                 "user.fields": "profile_image_url",
//             },
//         });

//         const hashtags = await response.data;
//         const users = await hashtags.includes.users;

//         return<THashtags[]> hashtags.data.map(hashtag => ({
//             id: hashtag.id,
//             author_id: hashtag.author_id,
//             text: hashtag.text,
//             user: users.find(user => user.id === hashtag.author_id),
//         }));

//     } catch (error) {
//         console.log(error);
//     }
// };

export const HashtagsService = {
    getHashtags
};
