import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search', () => {
    const search = shallow(<Search />);

    it('should render', () => {
        expect(search.find('.search').length).toBe(1);
    });
});
