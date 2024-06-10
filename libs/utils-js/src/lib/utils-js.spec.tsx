import { render } from '@testing-library/react';

import UtilsJs from './utils-js';

describe('UtilsJs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilsJs />);
    expect(baseElement).toBeTruthy();
  });
});
