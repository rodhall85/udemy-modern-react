import React from 'react';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={ false } />
      <GuessedWords guessedWords={[{guessedWord: 'train', letterMatchedCount: 3}]} />
    </div>
  );
}

export default App;
