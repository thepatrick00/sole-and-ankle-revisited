import React from 'react';
import { Bluetooth } from 'react-feather';
import styled, { ThemeProvider } from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const theme = {
  color: {
    primary: 'red',
    secondary: 'blue'
  },
  queries: {
    phoneAndSmaller: `(max-width: ${600/16}rem)`,
    tabletAndSmaller: `(max-width: ${950/16}rem)`,
    laptopAndSmaller: `(max-width: ${1300/16}rem)`,
  }
}

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} className='will it work'/>
      </Main>
    </ThemeProvider>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
