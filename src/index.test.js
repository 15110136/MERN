import React from 'react';
import { shallow } from 'enzyme';
import Index from './index';

describe('Index', () => {
    const index = shallow(<Index />);

    it('should render', () => {
        expect(index.length).toBe(1);
    });
});
