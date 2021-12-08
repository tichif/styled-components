import { Button } from 'components/common';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  body {
    background: #fff;
    min-height: 100vh;
    color: #000;
    margin: 0;
    font-family: 'Kaushan Script';
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Hello world</h1>
        <Button secondary>Secondary </Button>
        <Button>Primary </Button>
      </div>
    </>
  );
};

export default App;
