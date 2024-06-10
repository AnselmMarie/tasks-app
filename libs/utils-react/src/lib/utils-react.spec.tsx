import { render } from '@testing-library/react';

import UtilsReact from './utils-react';

describe('UtilsReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilsReact />);
    expect(baseElement).toBeTruthy();
  });
});
