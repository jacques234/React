import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { TwitterFollowCard } from './TwitterFollowCard'
import './index.css'



var root = ReactDOM.createRoot(document.getElementById('root'))
// cuando se usan los tres puntos es para pasar un objeto no es recomendable usarlo mucho

const cards = [];
for (let i = 0; i <= 10; i++) {
  let userName = `User${i}`;
  let name = `Name${i}`
  // cards.push(<TwitterFollowCard key={i} userName={userName} name={name} isFollowing >
  //   Diego{i}
  // </TwitterFollowCard>);
}

root.render(
  // <section className='App'>
  //   <TwitterFollowCard userName={"userName"}>
  //     Diego
  //   </TwitterFollowCard>
  //   <TwitterFollowCard userName={"userNames"}>
  //     Dania
  //   </TwitterFollowCard>
  // </section>
  <App/>
)
