import assert from 'assert';
import { render } from '@testing-library/react';

import Settings from "src/page/dashboard/Settings";
import TextWapper from './TextWapper';



describe('Settings', function () {
  it('should render Settings', async function () {
    const { container } = render(
      <TextWapper>
        <Settings />
      </TextWapper>
    );
    const h5Node = container.querySelector('#logout');
    assert.equal(h5Node.textContent, 'Logout');

  });
});