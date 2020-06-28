import React from "react";
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Hamburger from "../components/Hamburger";

Enzyme.configure({ adapter: new EnzymeAdapter()});

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Hamburger {...props}/>);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
};

it('renders without error.', ()=>{
   const wrapper = setup();
   const hamburger = findByTestAttr(wrapper, 'hamburger');
   expect(hamburger.length).toBe(1);
});

describe('When clicked on ', ()=>{
    describe('for the first time, ', ()=>{
        it('it toggles the navigation state.', ()=>{
            const wrapper = setup();
            const hamburger = findByTestAttr(wrapper, 'hamburger');
            hamburger.simulate('click');
            expect(hamburger.state).toBe({menuIsActive : true});
        });
        it('It also displays the menu items when open.', ()=>{
            const wrapper = setup();
            const hamburger = findByTestAttr(wrapper, 'hamburger');
            hamburger.simulate('click');
        });
    });
});
