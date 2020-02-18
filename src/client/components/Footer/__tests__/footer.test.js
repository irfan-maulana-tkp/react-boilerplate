import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import Footer from '../index';

describe('Footer', () => {
	afterEach(cleanup);

  test('should have author name', () => {
		const { getByRole } = render(<Footer/>);

    expect(getByRole('footer')).toHaveTextContent('© 2020 by Jacky Effendi');
  });
});
