import React from 'react';
import Enzyme, {mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Heading from './Heading';
import Root from '../../Root';

Enzyme.configure({ adapter: new EnzymeAdapter()});

let wrapper;
beforeEach(()=>{
  const initialState = {
    language: 'russian',
  };
  wrapper = mount(
    <Root initialState={initialState}>
      <Heading />
    </Root>
  );
});
afterEach(()=>{
  wrapper.unmount();
});


describe('Heading.js', ()=>{
   describe('On load,', ()=>{
       test('the Heading component renders without crashing.', ()=>{
           const heading = wrapper.find("[data-test='heading']");
           expect(heading.length).toBe(1);
       });
   });
});

