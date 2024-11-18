import { useState, useContext } from 'react';
import DarkModeProvider  from '../src/store/dark-mode-context'
import Main from './components/Main';

function App() {
  
  return (
    <DarkModeProvider>
      <Main />
    </DarkModeProvider>
  );
}

export default App;
