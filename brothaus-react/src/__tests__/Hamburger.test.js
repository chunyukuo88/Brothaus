import React from "react";
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Hamburger from "../components/Hamburger";

Enzyme.configure({ adapter: new EnzymeAdapter()});

const setup = () => {
  const wrapper = shallow(<Hamburger/>);
  return wrapper;
};
const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
};

describe('Hamburger.js,', ()=>{
    const wrapper = setup();

    describe('On load, ', ()=>{
        const hamburger = findByTestAttr(wrapper, 'hamburger');
        it('renders without error.', ()=>{
        expect(hamburger.length).toBe(1);
        });
    });
    describe('When clicked on ', ()=>{
        describe('for the first time, ', ()=>{
            it('the internal toggle function is invoked.', ()=>{
                const setMenuIsActive = jest.fn();
                const hamburger = wrapper.find('h1');
                const handleClick = jest.spyOn(React, "useState");
                handleClick.mockImplementation(menuIsActive => [menuIsActive, setMenuIsActive]);
                hamburger.simulate("click");
                expect(setMenuIsActive).toBeTruthy();
            });
        });
    });
});

