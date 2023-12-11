import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

it('should not show any error message when the component is loaded', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
