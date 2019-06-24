import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />);

  if (state) wrapper.setState(state);

  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

it('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

it('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

it('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

it('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

it ('clicking button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  wrapper.update();

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});

// challenges
it('renders a decrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'decrement-button');
  expect(button.length).toBe(1);
});

it('decrements the counter when decrement button is clicked', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  wrapper.update();

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(6);
});

it('should not let counter go below 0', () => {
  const counter = 0;
  const wrapper = setup(null, { counter });

  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  wrapper.update();

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(0);
});

it('displays an error if counter is 0 and decrement is clicked', () => {
  const counter = 0;
  const wrapper = setup(null, { counter });

  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  wrapper.update();

  const error = findByTestAttr(wrapper, 'counter-error');
  expect(error.length).toBe(1);
});

it('clear the error if increment is clicked', () => {
  const counter = 0;
  const wrapper = setup(null, { counter });

  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  decrementButton.simulate('click');
  wrapper.update();
  const incrementButton = findByTestAttr(wrapper, 'increment-button');
  incrementButton.simulate('click');
  wrapper.update();

  const error = findByTestAttr(wrapper, 'counter-error');
  expect(error.length).toBe(0);
});

it('does not render an error on load', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-error');
  expect(counterDisplay.length).toBe(0);
});