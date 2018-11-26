import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
    const footer = shallow(<Footer />);

    it('should render', () => {
        footer.setProps();
        expect(footer.find('.footer').length).toBe(1);
    });
});
