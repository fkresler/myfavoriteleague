import React from 'react';
import ReactDOM from 'react-dom';
import ChampionImage from './ChampionImage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChampionImage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
