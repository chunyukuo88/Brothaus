import React from 'react';
import staticStrings from '../../StaticStrings';
import Copyright from './Copyright.jsx';
import Root from '../../Root';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {mount} from "enzyme";
import Heading from "../Heading/Heading";

Enzyme.configure({ adapter: new EnzymeAdapter()});

let wrapper;

beforeEach(()=>{
  const initialState = {
    language: 'english',
  };
  wrapper = mount(
    <Root initialState={initialState}>
      <Heading />
    </Root>
  );
});

afterEach(()=>{
  wrapper.unmount();
});

describe('Copyright.jsx', ()=>{
  describe('Copyright()', ()=>{
    it('Renders without crashing.', ()=>{

    });
  });
});
