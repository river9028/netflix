import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../../pages';

jest.mock('react-router-dom');

describe('<Home />', () => {
  it('renders the hompage', () => {
    const { getByText, getAllByText, getAllByPlaceholderText } = render(
      <Home />
    );

    expect(getByText('Unlimited movies, TV shows, and more.')).toBeTruthy();
    expect(getByText('Watch anywhere. Cancel anytime.')).toBeTruthy();
    expect(getAllByPlaceholderText('Email address')).toBeTruthy();
    expect(getAllByText('Try it now')).toBeTruthy();
    expect(
      getAllByText(
        'Ready to wathch? Enter your email to create or restart your membership'
      )
    ).toBeTruthy();
  });
});
