import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const playlist = () => (
  <Container>
    <Header>
      <img src="https://static.spin.com/files/2016/08/twovines-compressed.jpg" alt="playlist" />
      <div>
        <span>PLAYLIST</span>
        <h1>Nome da playlist</h1>
        <p>12 músicas</p>

        <button type="button">PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar a playlist" />
          </td>
          <td>Tiger By My Side</td>
          <td>Empire of the Sun</td>
          <td>Walking On A Dream</td>
          <td>5:48</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar a playlist" />
          </td>
          <td>Tiger By My Side</td>
          <td>Empire of the Sun</td>
          <td>Walking On A Dream</td>
          <td>5:48</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar a playlist" />
          </td>
          <td>Tiger By My Side</td>
          <td>Empire of the Sun</td>
          <td>Walking On A Dream</td>
          <td>5:48</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar a playlist" />
          </td>
          <td>Tiger By My Side</td>
          <td>Empire of the Sun</td>
          <td>Walking On A Dream</td>
          <td>5:48</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar a playlist" />
          </td>
          <td>Tiger By My Side</td>
          <td>Empire of the Sun</td>
          <td>Walking On A Dream</td>
          <td>5:48</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar a playlist" />
          </td>
          <td>Tiger By My Side</td>
          <td>Empire of the Sun</td>
          <td>Walking On A Dream</td>
          <td>5:48</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default playlist;
