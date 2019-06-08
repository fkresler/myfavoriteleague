import React from 'react';
import ReactDOM from 'react-dom';
import ChampionPreferenceLists from './ChampionPreferenceLists';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChampionPreferenceLists />, div);
  ReactDOM.unmountComponentAtNode(div);
});
