import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'reactstrap';
import Tabs from './Tabs';

describe('Tabs', () => {
    const props = {
        mockItems: [{
            productName: 'test',
            productPrice: 123,
            rate: 4,
        }],
    };
    const state = {
        activeTab: '1',
        windowSize: 1280,
    };
    const tabs = shallow(<Tabs {...props} {...state} />);

    it('should render', () => {
        expect(tabs.find('.tabs').length).toBe(1);
        tabs.find(NavLink).at(0).simulate('click');
        tabs.find(NavLink).at(1).simulate('click');

        global.innerWidth = 500;
        tabs.setState({
            windowSize: window.innerWidth,
        });
        expect(tabs.find('.tabs').length).toBe(1);
    });

    it('should toggle', () => {
        tabs.instance().toggle('1');
        tabs.instance().toggle('2');
        expect(tabs.state().activeTab).toBe('2');
    });
});
