const { expect } = require("chai")

describe('google.com page', () =>{
    it ('shoul have the right title', () =>{
        browser.url('https://www.google.com');
        expect(browser).toHaveTitle('Google');
    });
});