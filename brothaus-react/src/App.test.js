import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter : new EnzymeAdapter()});

const setup = (props = {}, state = null) => {
    const wrapper = shallow(<App {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
};

const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
};

test('renders learn react link', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
});
