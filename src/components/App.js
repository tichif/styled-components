import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from 'components/pages/Home';
import Login from 'components/pages/Login';
import LightTheme from 'themes/light';
import DarkTheme from 'themes/dark';

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
  const [theme, setTheme] = useState(LightTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((state) => (state.id === 'light' ? DarkTheme : LightTheme));
        },
      }}
    >
      <GlobalStyle />
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
