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
        test('renders without error, ', ()=>{
            const component = findByTestAttr(wrapper, 'menu-items');
            expect(component.length).toBe(1);
        });
        test('and the initial language is English.', ()=>{
            const wrapper = shallow(<DropdownMenuItems/>);
            const languageDisplay = findByTestAttr(wrapper,'language-display');
            expect(languageDisplay.text()).toBe('English');
        });
    });
    describe('When the language string is clicked, ', ()=>{
        test('The displayed language string changes to 華語版本.', ()=>{
            const wrapper = shallow(<DropdownMenuItems />);
            const languageDisplay = wrapper.find('#chinese-or-english');
            console.log('Before click: ', languageDisplay.text());
            languageDisplay.simulate('click');
            console.log('After click: ', languageDisplay.text());
            expect(languageDisplay.text()).toEqual('華語版本');
        });
    });
});
