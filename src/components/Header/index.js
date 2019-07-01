import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img src="https://avatars1.githubusercontent.com/u/15240858?v=4" alt="avatar" />
      Rafael Sobucki
    </User>
  </Container>
);

export default Header;
