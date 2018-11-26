import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
    const login = shallow(<Login />);

    it('should render', () => {
        expect(login.find('.login').length).toBe(1);
    });

    it('should responseFacebook', () => {
        const res = {};
        login.instance().responseFacebook(res);
    });

    it('should responseGoogle', () => {
        const res = {};
        login.instance().responseGoogle(res);
    });
});
