import { render } from '@testing-library/react';

import { UiSelect } from '.';

describe('DesignSystem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiSelect />);
    expect(baseElement).toBeTruthy();
  });
});
