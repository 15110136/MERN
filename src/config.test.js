const test = require('./config');

it('test config', () => {
    expect(test.default.apiService.host).toBe('https://5bb4ce03a3dce60014cae955.mockapi.io');
});
