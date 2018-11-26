import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './Homepage';

describe('Homepage', () => {
    const homepage = shallow(<Homepage />);

    it('should render', () => {
        expect(homepage.find('.feature').length).toBe(1);
    });
});
