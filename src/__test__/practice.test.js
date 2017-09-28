import App from '../App';
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import sinon from 'sinon';

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

 it('simulates click events', () => {
    const component = shallow(<App />);
    const instance = component.instance();
    const summ = sinon.spy(instance, 'summ');
    component.find('button').simulate('click');
    expect(summ.called).toHaveBeenCalled;
  });


 it('should be selectable by id "check"', function() {
    const component = shallow(<App />);
    const button=component.find('button');
    expect((button).is('#check')).toBe(true);
  });