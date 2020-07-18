import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import DropdownMenuItems from "../components/DropdownMenuItems";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}, state=null) => {
  const wrapper = shallow(<DropdownMenuItems {...props}/>);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
};

describe('DropdownMenuItems.js', ()=>{
    const wrapper = setup();
    describe('On load,', ()=>{
        it('renders without error, ', ()=>{
            const component = findByTestAttr(wrapper, 'menu-items');
            expect(component.length).toBe(1);
        });
    });
    describe('When the language string is clicked, ', ()=>{
        it('the the internal toggler function is invoked, ', ()=>{
            const mockToggler = jest.fn();
            const wrapper = shallow(<p id="chinese-or-english"
                                       data-test='language-display'
                                       onClick={mockToggler}></p>);
            wrapper.simulate('click');
            expect(mockToggler).toBeCalled();
        });
        it('and the language changes.', ()=>{

        });
    });
});
