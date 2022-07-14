import axios from "axios";

const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const DATABASE_ID = process.env.REACT_APP_AIRTABLE_DATABASE_ID || "";
const TWITTER_API_KEY = process.env.REACT_APP_TWITTER_API_KEY;

//cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=neymar%20has:hashtags%20&max_results=10&expansions=author_id,attachments.media_keys&user.fields=id,name,username,profile_image_url

export const Airtable = axios.create({
    baseURL: `https://api.airtable.com/v0/${DATABASE_ID}`,
    headers: {
        Authorization: `Bearer ${API_KEY}`,
    },
});

export const Twitter = axios.create({
    baseURL:
        "https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=neymar%20has:hashtags%20&max_results=10&expansions=author_id,attachments.media_keys&user.fields=id,name,username,profile_image_url",

    headers: {
        Auhtorization: `Bearer ${TWITTER_API_KEY}`,
    },
});
