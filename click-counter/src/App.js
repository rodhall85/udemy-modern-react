import React from 'react';
import './App.css';

class App extends React.Component {
  state = { counter: 0, error: false };

  decrement = () => {
    const counter = this.state.counter;

    if (counter > 0) {
      this.setState({ counter: counter - 1 });
    }
    else {
      this.setState({ error: true });
    }
  };

  increment = () => {
    this.setState({ counter: this.state.counter + 1, error: false });
  }

  renderError() {
    if (this.state.error) {
      return <div data-test="counter-error">The counter cannot be below 0</div>;
    }
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button 
          data-test="increment-button"
          onClick={this.increment}
        >
          Increment counter
        </button>
        <button 
          data-test="decrement-button"
          onClick={this.decrement}
        >
          Decrement counter
        </button>
        {this.renderError()}
      </div>
    );
  }
}

export default App;
