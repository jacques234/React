import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {TwitterFollowCard} from './TwitterFollowCard'
import './index.css'



var root = ReactDOM.createRoot(document.getElementById('root'))

const cards = [];
for (let i = 0; i <= 10; i++) {
  let userName = `User${i}`;
  let name = `Name${i}`
  cards.push(<TwitterFollowCard key={i} userName= {userName} name={name} />);
}

root.render(
  <section className='App'>
    {cards}
  </section>
)
