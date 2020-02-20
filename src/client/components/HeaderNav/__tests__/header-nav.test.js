import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import HeaderNav from '../index';

describe('HeaderNav', () => {
	afterEach(cleanup);

  test('should have 3 links as NavLink', () => {
    const { container } = render(<HeaderNav/>);

    expect((container.querySelectorAll('header > div > div > div > a')).length).toBe(3);
  });
});
