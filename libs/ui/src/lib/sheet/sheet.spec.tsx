import { render } from '@testing-library/react';

import Template from './sheet.view';

describe('Template', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Template />);
    expect(baseElement).toBeTruthy();
  });
});
