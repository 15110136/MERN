import React from 'react';
import { shallow } from 'enzyme';
import Category from './Category';

describe('Category', () => {
    const category = shallow(<Category />);

    it('should render', () => {
        expect(category.find('.category').length).toBe(1);
    });
});
