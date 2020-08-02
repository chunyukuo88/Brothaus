import React from "react";
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Input from '../components/Input';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const setup = () => {
    const wrapper = shallow(<Input/>);
    return wrapper;
};
const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
};

describe('Input.js', ()=>{
   it('Component renders without crashing', ()=>{
       const wrapper = setup();
       const component = findByTestAttr(wrapper, 'Input');
       expect(component.length).toBe(1);
   });
});
