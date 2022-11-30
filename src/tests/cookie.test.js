import assert from 'assert';
import { setCookie, getCookie } from "src/utlis/cookie";

describe('cookie', function () {
  it('should set cookie', async function () {
    setCookie('test', 1);

    assert.equal(document.cookie, 'test=1');

  });


  it('should get cookie', async function () {
    setCookie('testCookie', 'content');
    const testCookie = getCookie('testCookie');
    assert.equal(testCookie, 'content');

  });

});