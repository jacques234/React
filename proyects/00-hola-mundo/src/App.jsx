import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'


const users = [
    {
        userName: 'DiegoPM',
        name: 'Diego Enrique',
        isFollowing: true
    },
    {
        userName: 'DaniaCIR',
        name: 'Dania Decire',
        isFollowing: false
    },
    {
        userName: 'CitlaRaRo',
        name: 'Citlali Ramos',
        isFollowing: true
    }
]

export function App() {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing },index) => (
                    <TwitterFollowCard
                        key={index}
                        userName={userName}
                        isFollowingP={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                )
                )
            }

        </section>
    )
}