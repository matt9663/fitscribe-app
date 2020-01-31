import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PlanDay from './PlanDay';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PlanDay />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});