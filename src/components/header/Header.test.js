import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
    const header = shallow(<Header />);

    it('should render', () => {
        expect(header.find('.header').length).toBe(1);
    });

    it('should showMenuSideBar', () => {
        header.instance().showMenuSideBar();
        expect(header.state().showMenu).toBe(true);
    });
});
