import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../tests/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [
        { guessedWord: 'train', letterMatchedCount: 3 },
    ]
};

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords { ...setupProps } />);
};

it('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });
    
    it('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    it('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });
});

describe('if there are words guessed', () => {
    let wrapper;
    const guessedWords = [
        { guessedWord: 'train', letterMatchedCount: 3 },
        { guessedWord: 'agile', letterMatchedCount: 1 },
        { guessedWord: 'party', letterMatchedCount: 5 },
    ];
    
    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });

    it('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    it('renders "guessed words" section', () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    });

    it('correct number of guessed words', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsNodes.length).toBe(guessedWords.length);
    });
});