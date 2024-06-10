import { render } from '@testing-library/react';

import StoreRtk from './store-rtk';

describe('StoreRtk', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoreRtk />);
    expect(baseElement).toBeTruthy();
  });
});
