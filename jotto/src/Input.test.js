import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../tests/testUtils';
import Input from './Input';

const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    return shallow(<Input store={store} />).dive().dive();
};

describe("render", () => {
    describe("word has not been guessed", () => {
        let wrapper;
        
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        });

        it("renders component without error", () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });

        it("renders input box", () => {
            const component = findByTestAttr(wrapper, 'input-box');
            expect(component.length).toBe(1);
        });

        it("renders the submit button", () => {
            const component = findByTestAttr(wrapper, 'submit-button');
            expect(component.length).toBe(1);
        });
    });

    describe("word has been guessed", () => {
        let wrapper;

        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState);
        });

        it("renders component without error", () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });

        it("does not render input box", () => {
            const component = findByTestAttr(wrapper, 'input-box');
            expect(component.length).toBe(0);
        });

        it("does not render the submit button", () => {
            const component = findByTestAttr(wrapper, 'submit-button');
            expect(component.length).toBe(0);
        });
    });
});

describe("update state", () => {

});
