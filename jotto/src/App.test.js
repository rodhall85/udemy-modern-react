import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { storeFactory } from '../tests/testUtils';

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  return shallow(<App store={store} />).dive().dive();
};

describe('redux props', () => {
  it('has `success` piece of state as prop', () => {
    const wrapper = setup({success: true});
    const successProp = wrapper.instance().props.success;

    expect(successProp).toBe(true);
  });

  it('has `success` piece of state as prop', () => {
    const wrapper = setup({secretWord: 'party'});
    const secretWordProp = wrapper.instance().props.secretWord;

    expect(secretWordProp).toBe('party');
  });

  it('has `guessedWords` piece of state as prop', () => {
    const guessedWords = [{guessedWord: 'train', letterMatchedCount: 3}];
    const wrapper = setup({guessedWords});
    const guessWordsProp = wrapper.instance().props.guessedWords;

    expect(guessWordsProp).toBe(guessedWords);
  });

  it('has `getSecretWord` action creator is a function on the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;

    expect(getSecretWordProp).toBeInstanceOf(Function);
  });


});
