import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import AppContainer from './hooks';

import { ThemeProvider } from './hooks/theme';
import ThemeSwitcher from './components/ThemeSwitcher';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <ThemeProvider>
    <AppContainer>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
      <ThemeSwitcher />
    </AppContainer>
  </ThemeProvider>
);
export default App;
