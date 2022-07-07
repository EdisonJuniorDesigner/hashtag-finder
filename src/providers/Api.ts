import axios from "axios";

const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;

export const Api = axios.create({
  baseURL: "https://api.airtable.com/v0/app6wQWfM6eJngkD4",
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});
