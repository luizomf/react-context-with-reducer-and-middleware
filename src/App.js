import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthContextProvider from './contexts/auth/Context';

import Routes from './routes';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
