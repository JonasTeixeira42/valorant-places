import { render, screen } from '@testing-library/react';

import Map from '.';

describe('<Map />', () => {
  it('should render with no marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument();
  });

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Poços de Caldas',
      slug: 'pocosdecaldas',
      location: {
        latitude: 0,
        longitude: 0
      }
    };

    render(<Map places={[place]} />);

    expect(screen.getByTitle(/poços de caldas/i)).toBeInTheDocument();
  });
});
