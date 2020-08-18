import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Fries from '../components/Fries';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const setup = () => shallow(<Fries/>);
const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);

describe('Fries.js, ', ()=>{
  const wrapper = setup();
  const fries = findByTestAttr(wrapper, 'fries');

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('On load, ', ()=>{
    test('the Fries component renders without crashing, ', ()=>{
      expect(fries.length).toBe(1);
    });
    test('and the default menu state is closed.', ()=>{
      const friesMenuItems = findByTestAttr(wrapper, 'fries-drawer')
      expect(friesMenuItems.innerText).toBeUndefined();
    });
  });
  describe('When I click the fries icon, ', ()=>{
    test('the menu toggle is invoked.', ()=>{
      const { container } = render(<Fries/>);
      const button = container.firstChild;
      const drawer = container.firstChild.firstChild.nextSibling;

            console.log('drawer.innerHTML: ', drawer.innerHTML);
      fireEvent.click(button);
            console.log('drawer.innerHTML: ', drawer.innerHTML);
      expect(drawer.innerHTML).toBeUndefined();
    });
  });
});

  // const mockSetMenuIsActive = jest.fn();
  // React.useState = jest.fn(() => [false, mockSetMenuIsActive]);
  //
  // const wrapper = setup();
  // const fries = findByTestAttr(wrapper, 'fries');
  //
  // fries.simulate('click', { preventDefault() {} });
  // // fries.simulate('click');
  // expect(mockSetMenuIsActive).toHaveBeenCalledWith(false);


// const setMenuIsActive = jest.fn();
// const handleClick = jest.spyOn(React, 'useState');
// handleClick.mockImplementation(menuIsActive => [menuIsActive, setMenuIsActive]);
// expect(setMenuIsActive).toBeTruthy();
// expect(setMenuIsActive).toHaveBeenCalled();
// fries.simulate('click');

// const wrapper = setup();
// const fries = findByTestAttr(wrapper, 'fries');
// const setMenuIsActive = jest.fn();
// React.useState = jest.fn(() => [false, setMenuIsActive]);
// fries.simulate('click', { preventDefault() {} });
// expect(setMenuIsActive).toHaveBeenCalledTimes(1);
