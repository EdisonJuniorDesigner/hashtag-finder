import { Airtable } from "providers";

interface ISearch {
  Data: number;
  Hashtag: string;
  Squad: string;
}

type TSearchesResponse = {
  records: {
    id: string;
    fields: ISearch;
    createdTime: string;
  }[]
}

const getSearches = async (pageSize: number) => {
  const response = await Airtable.get<TSearchesResponse>(`/Buscas?view=squad05_view&pageSize=${pageSize}`);
  const aboutContent = await response.data;

   return aboutContent.records.map(search => ({
    date: search.fields.Data,
    hashtag: search.fields.Hashtag,
    squad: search.fields.Squad,
  }));
}

const postSearch = async (search: string) => {
  try{
    const response = await Airtable.post("/Buscas", JSON.stringify({
      records: [{
        fields: {
          Squad: '05-22',
          Hashtag: search,
          Data: Date.now(),
        }
      }]
    }));
  }catch(e){
    console.log(e);
  }
}


export const SearchesService = {
  getSearches, postSearch
}