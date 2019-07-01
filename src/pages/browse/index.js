import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img src="https://static.spin.com/files/2016/08/twovines-compressed.jpg" alt="playlist" />
        <strong>Melhores da semana</strong>
        <p>Somente seleções feitas exclusivamente para você!</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img src="https://static.spin.com/files/2016/08/twovines-compressed.jpg" alt="playlist" />
        <strong>Melhores da semana</strong>
        <p>Somente seleções feitas exclusivamente para você!</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img src="https://static.spin.com/files/2016/08/twovines-compressed.jpg" alt="playlist" />
        <strong>Melhores da semana</strong>
        <p>Somente seleções feitas exclusivamente para você!</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img src="https://static.spin.com/files/2016/08/twovines-compressed.jpg" alt="playlist" />
        <strong>Melhores da semana</strong>
        <p>Somente seleções feitas exclusivamente para você!</p>
      </Playlist>
    </List>
  </Container>
);

export default browse;
