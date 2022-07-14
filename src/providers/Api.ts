import axios from "axios";

const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const DATABASE_ID = process.env.REACT_APP_AIRTABLE_DATABASE_ID || "";

export const Airtable = axios.create({
    baseURL: `https://api.airtable.com/v0/${DATABASE_ID}`,
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
});
