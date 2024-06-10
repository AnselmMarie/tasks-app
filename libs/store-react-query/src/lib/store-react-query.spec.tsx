import { render } from '@testing-library/react';

import StoreReactQuery from './store-react-query';

describe('StoreReactQuery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoreReactQuery />);
    expect(baseElement).toBeTruthy();
  });
});
