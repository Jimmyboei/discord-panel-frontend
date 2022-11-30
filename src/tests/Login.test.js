import assert from 'assert';
import { render } from '@testing-library/react';

import ChatLogItem from "src/page/dashboard/component/ChatLogItem";

describe('ChatLogItem', function () {
  it('should render ChatLogItem', async function () {
    const { container } = render(
      <ChatLogItem
        channelId={'channelId'}
        date={'date'}
        message={'message'}
      />
    );

    const h6Node = container.querySelector('#channelId');
    assert.equal(h6Node.textContent, 'Channel Id: channelId ');
  });
});