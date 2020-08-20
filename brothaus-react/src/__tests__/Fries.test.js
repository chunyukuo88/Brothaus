import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Fries from '../components/Fries';

describe('Fries.js, ', ()=>{
  describe('On load, ', ()=>{
    test('the Fries component renders without crashing, ', ()=>{
      render(<Fries/>);
      expect(screen.getByTestId('fries')).toBeInTheDocument();
    });
    test('and the drawer is closed.', ()=>{
      render(<Fries/>);
      const drawer = screen.getByTestId('fries-drawer');
      expect(drawer.innerHTML).toBe('');
    });
  });
  describe('When I click the fries icon, ', ()=>{
    test('the menu toggle is invoked.', ()=>{
      render(<Fries/>);
      const drawer = screen.getByTestId('fries-drawer');
      expect(drawer.innerHTML.length).toBe(0);

      screen.debug(screen.getByText(/more_vert/));
      userEvent.click(screen.getByText(/more_vert/));
      // expect(...).to(...);
    });
  });
});
