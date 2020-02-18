import React from 'react';
import { createBrowserHistory } from 'history';

import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import App from '../app';

const history = createBrowserHistory();

describe('App', () => {
	afterEach(cleanup);

  test('should have author name on Footer', () => {
		const { getByText } = render(<App history={history}/>);

    expect(getByText('© 2020 by Jacky Effendi')).toBeInTheDocument();
  });
});
