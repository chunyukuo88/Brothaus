import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Fries from '../components/Fries';

beforeEach(()=>{
  render(<Fries/>);
});

describe('Fries.js, ', ()=>{
  describe('On load, ', ()=>{
    test('the Fries component renders without crashing,', ()=>{
      expect(screen.getByTestId('fries')).toBeInTheDocument();
    });
    test('and the drawer is closed.', ()=>{
      const drawer = screen.getByTestId('fries-drawer');
      expect(drawer.innerHTML).toBe('');
    });
  });
  describe('When I click the fries icon,', ()=>{
    test('the menu toggle is invoked.', ()=>{
      const drawer = screen.getByTestId('fries-drawer');
      const button = screen.getByTestId('fries-button');

      expect(drawer.innerHTML).toBe('');
      userEvent.click(button);
      expect(drawer.innerHTML).not.toBe('');
    });
  });
});
