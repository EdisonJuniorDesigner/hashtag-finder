import Airtable from 'airtable';

const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const DATABASE_ID = process.env.REACT_APP_AIRTABLE_DATABASE_ID || "";

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: API_KEY
});

export const airTableBase = Airtable.base(DATABASE_ID);
