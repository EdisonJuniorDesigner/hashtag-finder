import axios from "axios";
// import OAuth from "oauth-1.0a";

const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const DATABASE_ID = process.env.REACT_APP_AIRTABLE_DATABASE_ID || "";
const TWITTER_BEARER_TOKEN = process.env.REACT_APP_TWITTER_BEARER_TOKEN;

export const Airtable = axios.create({
    baseURL: `https://api.airtable.com/v0/${DATABASE_ID}`,
    headers: {
        Authorization: `Bearer ${API_KEY}`,
    },
});

export const Twitter = axios.create({
    baseURL: "https://cors.eu.org/https://api.twitter.com/2/tweets/search",
    headers: {
        Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
        "content-type": "application/json",
        accept: "application/json",
    },
});
