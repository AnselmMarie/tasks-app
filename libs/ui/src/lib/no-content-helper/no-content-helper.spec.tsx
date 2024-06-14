import { render } from '@testing-library/react';

import UiNoContentHelper from './no-content-helper.view';

describe('No Content Helper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiNoContentHelper />);
    expect(baseElement).toBeTruthy();
  });
});
