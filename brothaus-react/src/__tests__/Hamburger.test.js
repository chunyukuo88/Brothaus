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

describe('On load,', ()=>{
    it('renders without error.', ()=>{
    const wrapper = setup();
    const hamburger = findByTestAttr(wrapper, 'hamburger');
    expect(hamburger.length).toBe(1);
    });
});
xdescribe('When clicked on ', ()=>{
    describe('for the first time, ', ()=>{
        it('the internal toggle function is invoked.', ()=>{
            const wrapper = setup();
            const hamburger = findByTestAttr(wrapper, 'hamburger');
            const spy = jest.spyOn(Hamburger, '_toggleMenuState');
            hamburger.simulate('click');
            expect(spy).toHaveBeenCalled();
        });
        xit('It also displays the menu items when open.', ()=>{
            const wrapper = setup();
            const hamburger = findByTestAttr(wrapper, 'hamburger');
            hamburger.simulate('click');
        });
    });
});
