import React from 'react';

import { MockedProvider } from '@apollo/react-testing';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import gqlMocks from './__gql_mocks__/mock-gql'
import Home from '../View';

describe('Home', () => {
	const history = createMemoryHistory();

	afterEach(cleanup);

  test('should have author name', () => {
		const { getByText } = render(
  <MockedProvider addTypename={false} mocks={gqlMocks}>
    <Router history={history}>
      <Home />
    </Router>
  </MockedProvider>);

    expect(getByText('Pokemon List')).toBeInTheDocument();
  });
});
