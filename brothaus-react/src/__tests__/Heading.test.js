import React from "react";
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter()});
import Heading from '../components/Heading';

let wrapper;
beforeEach(()=>{
  wrapper = shallow(<Heading />);
});
afterEach(()=>{
  wrapper.unmount();
});

describe('Heading.js', ()=>{
   describe('On load,', ()=>{
       it('the Heading component renders without crashing.', ()=>{
           const heading = wrapper.find("[data-testid='heading']");
           expect(heading.length).toBe(1);
       });
   });
   xdescribe('When the weather display string is clicked,', ()=>{
       it('the degree toggler is invoked.', ()=>{
           wrapper = mount(<Heading/>);
           const languageDisplay = wrapper.find("[data-test='weather-display']");
           console.log(languageDisplay);
           expect(languageDisplay.innerText).toBeDefined();
       });
    });
});

