import React from 'react';

import { Container, Title, Table } from './styles';

export function Dashboard() {
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
          <tr>
            <td>#teste</td>
            <td>01/01/2020</td>
            <td>12:00</td>
          </tr>
          <tr>
            <td>#teste</td>
            <td>01/01/2020</td>
            <td>12:00</td>
          </tr>
          <tr>
            <td>#teste</td>
            <td>01/01/2020</td>
            <td>12:00</td>
          </tr>
          <tr>
            <td>#teste</td>
            <td>01/01/2020</td>
            <td>12:00</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
