import { render } from '@testing-library/react';

import { UiDateTime } from '.';

describe('Template', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiDateTime />);
    expect(baseElement).toBeTruthy();
  });
});
