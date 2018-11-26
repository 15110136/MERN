import React from 'react';
import { shallow } from 'enzyme';
import Banner from './Banner';
import demo1 from '../../../assets/slideImg/demo1.jpg';
import demo2 from '../../../assets/slideImg/demo2.jpg';
import demo3 from '../../../assets/slideImg/demo3.jpg';

describe('Banner', () => {
    const props = {
        items: [
            {
                src: demo1,
                altText: 'Slide 1',
            },
            {
                src: demo2,
                altText: 'Slide 2',
            },
            {
                src: demo3,
                altText: 'Slide 3',
            },
        ],
    };
    const banner = shallow(<Banner {...props} />);

    it('should render', () => {
        expect(banner.find('.banner').length).toBe(1);
    });

    it('should slideComponent', () => {
        banner.instance().slideComponent();
    });
});
