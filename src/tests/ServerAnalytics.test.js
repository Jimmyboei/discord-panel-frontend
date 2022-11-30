import assert from 'assert';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import ServerAnalytics from "src/page/dashboard/ServerAnalytics";
import TextWapper from './TextWapper';



describe('ServerAnalytics', function () {
  it('should render ServerAnalytics', function () {
    const { container } = render(
      <TextWapper>

        <ServerAnalytics />
      </TextWapper>
    );

    const h5Node = container.querySelector('#serverNumber');
    assert.equal(h5Node.textContent, 'Joined Server');

  });
});