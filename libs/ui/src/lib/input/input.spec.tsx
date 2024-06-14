import { render } from '@testing-library/react';

import Input from './input.view';

describe('DesignSystem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input />);
    expect(baseElement).toBeTruthy();
  });
});
