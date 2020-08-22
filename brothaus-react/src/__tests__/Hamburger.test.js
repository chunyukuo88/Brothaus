import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Hamburger from "../components/Hamburger";

beforeEach(()=>{
    render(<Hamburger/>);
});

describe('Hamburger.js,', ()=>{
    describe('On load,', ()=>{
       test('the Hamburger component renders without crashing,', ()=>{
           const hamburger = screen.getByTestId('hamburger');
           expect(hamburger).toBeInTheDocument();
       });
       test('and the drawer is closed.', ()=>{
           const drawer = screen.getByTestId('drawer');
           expect(drawer.innerHTML).toBe('');
       });
    });
    describe('When I click the hamburger icon,', ()=>{
        test('the menu toggle is invoked.', ()=>{
            const hamburger = screen.getByTestId('hamburger');
            const drawer = screen.getByTestId('drawer');

            expect(drawer.innerHTML).toBe('');
            userEvent.click(hamburger);
            expect(drawer.innerHTML).not.toBe('');
        });
    });
});

