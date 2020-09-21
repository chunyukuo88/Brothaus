import React from "react";
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter()});
import Heading from '../components/Heading';
import Root from '../Root';

let wrapper;
beforeEach(()=>{
  wrapper = shallow(<Root><Heading/></Root>);
});
afterEach(()=>{
  wrapper.unmount();
});

describe('Heading.js', ()=>{
   describe('On load,', ()=>{
       it('the Heading component renders without crashing.', ()=>{
           const heading = wrapper.find("[data-testid='heading']");
           expect(heading.length).toEqual(1);
       });
   });
});

