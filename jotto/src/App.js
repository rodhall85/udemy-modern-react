import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import { getSecretWord } from './actions';
import Input from './Input';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={ this.props.success } />
        <Input />
        <GuessedWords guessedWords={ this.props.guessedWords } />
      </div>
    );
  }
}

const mapStateToProps = ({ success, guessedWords, secretWord }) => {
  return { 
    success,
    guessedWords,
    secretWord,
  }
};

export default connect(mapStateToProps, { getSecretWord })(App);
