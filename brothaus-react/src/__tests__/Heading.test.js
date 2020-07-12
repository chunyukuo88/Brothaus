import React from "react";
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Heading from "../components/Heading";

Enzyme.configure({ adapter: new EnzymeAdapter()});

it('The Heading component renders without crashing.', ()=>{
    const wrapper = shallow(<Heading />);
    const heading = wrapper.find("[data-test='heading']");
    expect(heading.length).toBe(1);
});

