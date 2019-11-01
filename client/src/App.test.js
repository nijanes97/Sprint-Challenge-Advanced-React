import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react'
import PlayerCard from './components/PlayerCard';
import PlayerList from './components/PlayerList'
import mockAxios from 'axios'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('PlayerCard is working correctly', () => {
  const props = {
    player: {
      name: 'Serena Williams',
      country: 'United States'
    }
  }
  render(<PlayerCard {...props} />)
})

test('PlayerList is working correctly', () => {
  const props = {
    players: [
      {name: "Alex Morgan", country: "United States", searches: 100, id: 0},
      {name: "Megan Rapinoe", country: "United States", searches: 99, id: 1},
      {name: "Marta", country: "Brazil", searches: 18, id: 2}
    ]
  }
  render(<PlayerList {...props} />)
})
