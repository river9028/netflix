import React from 'react';
import { render } from '@testing-library/react';
import { Feature } from '../../components';

describe('<Feature />', () => {
  it('renders the <Feature /> with a just a title', () => {
    const { container, queryByText, getByText } = render(
      <Feature>
        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
      </Feature>
    );

    expect(getByText('Unlimited movies, TV shows, and more.')).toBeTruthy();
    expect(queryByText('Watch anywhere. Cancel anytime.')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Feature /> with a just a subtitle', () => {
    const { container, queryByText, getByText } = render(
      <Feature>
        <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
      </Feature>
    );

    expect(queryByText('Unlimited movies, TV shows, and more.')).toBeFalsy();
    expect(getByText('Watch anywhere. Cancel anytime.')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
