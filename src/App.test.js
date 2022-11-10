import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//jest.mock('./App2', () => 'App2');
//jest.mock('./App3', () => 'App3');

it('renders without crashing', () => {
	
  const div = document.createElement('div');
  
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

