import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import LoginAndSignup from '../components/LoginAndSignup';

Enzyme.configure({adapter: new EnzymeAdapter});

const findByAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
};


describe('On load,', ()=>{
   it('The component renders without error', ()=>{
    const wrapper = shallow(<LoginAndSignup/>);
    const component = findByAttr(wrapper, 'login-and-signup');
    expect(component.length).toBe(1);
   });
});
