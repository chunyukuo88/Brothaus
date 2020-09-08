import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter()});
import Code from '../components/Code';
import Root from '../Root.js';

let wrapper;
beforeEach(()=>{
  const initialState = {
    language: 'english',
  };
  wrapper = mount(
    <Root initialState={initialState}>
      <Code />
    </Root>
  );
});
afterEach(()=>{
  wrapper.unmount();
});

describe('Code.js', ()=>{
  describe('On load,', ()=>{
    test('It loads without crashing', ()=>{
      const component = wrapper.find("[data-test='code']");
      expect(component.length).toBe(1);
    });
  });
});
