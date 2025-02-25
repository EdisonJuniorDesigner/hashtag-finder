import { useEffect, useState } from 'react';

import { useMediaQuery } from 'react-responsive';
import { format } from 'date-fns';

import { Container, Title, Table, Button } from './styles';

import { SearchesService } from "services";

type TSearch = {
  date: number,
  hashtag: string,
  squad: string,
}

export function Dashboard() {

  const isMobile = useMediaQuery({ maxWidth: 700 });

  const { getSearches } = SearchesService;
  const [searches, setSearches] = useState<TSearch[] | null>(null);

  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);

  const parseDate = (miliseconds: number) => {
    const date = new Date(miliseconds);

    return {
      date: format(date, "dd/MM/yyyy"),
      time: format(date, "HH:mm")
    };
  }

  const handleEndOfPage = () => {
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
    getSearches(pageSize)
      .then(res => setSearches(res))
      .catch(err => console.log(err.response));
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
                <td>{ parseDate(search.date).date }</td>
                <td>{ parseDate(search.date).time }</td>
              </tr>
            )) : <tr><td>Carregando...</td></tr> }
        </tbody>
      </Table>
      { isMobile && <Button onClick={() => { if(!loading) setPageSize(pageSize => pageSize+10) }}>Carregar mais</Button> }
    </Container>
  );
}
