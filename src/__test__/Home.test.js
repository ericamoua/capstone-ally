import {render, screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import React from 'react';
import { fireEvent } from '@testing-library/react';

describe('Home', () => {
    test('renders Home component', () => {
      render(
        <Router>
            <Home />
        </Router>
      );
      
  
      // Home component should render a heading:
      expect(screen.getByRole('heading', { name: /Welcome to Charlotte/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /Amenities Around Every Corner/i })).toBeInTheDocument();
  
    //   Check if the image is rendered
      expect(screen.getByAltText('charlotte art')).toBeInTheDocument();
  
    //   Check if the MortgageCalculator component is rendered
    //   This assumes that MortgageCalculator renders a button with 'Calculate' text
     expect(screen.getByRole('button', { name: /Calculate/i })).toBeInTheDocument();
    });

    test('calls onClick prop when button is clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(
          <Router>
            <Home onClick={handleClick} />
          </Router>
        );
      
        fireEvent.click(getByText(/button text/i));
        expect(handleClick).toHaveBeenCalled();
    });
  });