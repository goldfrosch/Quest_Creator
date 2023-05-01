import { render } from '@testing-library/react';

import QcComponent from './qc-component';

describe('QcComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QcComponent />);
    expect(baseElement).toBeTruthy();
  });
});
