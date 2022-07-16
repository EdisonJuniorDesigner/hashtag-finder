import { useEffect, useState } from 'react';

import { Container, Title, Table } from './styles';

import { SearchesService } from "services";

type TSearch = {
  date: number,
  hashtag: string,
  squad: string,
}

export function Dashboard() {

  const { getSearches } = SearchesService;
  const [searches, setSearches] = useState<TSearch[] | null>(null);

  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);

  const milisecondsToDateTime = (miliseconds: number) => {
    const date = new Date(miliseconds);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return {
      date: `${day}/${month}/${year}`,
      time: `${hours}:${minutes}`,
    };
  }

  const handleEndOfPage = (event: Event) => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      setLoading(true);
      setPageSize(pageSize => pageSize + 10);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleEndOfPage);
    getSearches(pageSize).then(res => setSearches(res));
    return () => window.removeEventListener('scroll', handleEndOfPage);
  }, [])

  useEffect(() => {
    getSearches(pageSize).then(res => setSearches(res));
    setLoading(false);
  }, [pageSize])

  return (
    <Container>
      <Title>Buscas Realizadas</Title>
      <Table>
        <thead>
          <tr>
            <th>Hashtag</th>
            <th>Data</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          { searches ? searches.map((search, index) => (
              <tr key={index}>
                <td>#{search.hashtag}</td>
                <td>{ milisecondsToDateTime(Number(search.date)).date }</td>
                <td>{ milisecondsToDateTime(Number(search.date)).time }</td>
              </tr>
            )) : <tr><td>Carregando...</td></tr> }
        </tbody>
      </Table>
      { loading && <div>Carregando...</div> }
    </Container>
  );
}
