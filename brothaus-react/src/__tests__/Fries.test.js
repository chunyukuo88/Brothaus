import React from "react";
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Fries from '../components/Fries';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const setup = () => shallow(<Fries/>);
const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);

describe('Fries.js, ', ()=>{
  const wrapper = setup();
  const fries = findByTestAttr(wrapper, 'fries');
  describe('On load, ', ()=>{
    test('the Fries component renders without crashing, ', ()=>{
      expect(fries.length).toBe(1);
    });
    test('and the default menu state is closed.', ()=>{
      const friesMenuItems = findByTestAttr(wrapper, 'fries-menu-items')
      console.log(friesMenuItems);
      console.log(typeof friesMenuItems);
      expect(friesMenuItems.innerText).toBeUndefined();
    });
  });
  describe('When the fries are clicked, ', ()=>{
    const setMenuIsActive = jest.fn();
    const handleClick = jest.spyOn(React, 'useState');
    handleClick.mockImplementation(menuIsActive => [menuIsActive, setMenuIsActive]);
    fries.simulate('click');
    expect(setMenuIsActive).toBeCalled();
  });
});
