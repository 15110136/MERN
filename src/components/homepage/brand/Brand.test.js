import React from 'react';
import { shallow } from 'enzyme';
import Brand from './Brand';

describe('Brand', () => {
    const brand = shallow(<Brand />);

    it('should render', () => {
        expect(brand.find('.brand').length).toBe(1);
    });
});
