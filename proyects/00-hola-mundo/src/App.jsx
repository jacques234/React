import './App.css'
export function App(){
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                alt="Avatar" src="https://pbs.twimg.com/profile_images/1433234061691084800/8TUii2rl_normal.jpg" />
                <div className='tw-followCard-info'>
                    <strong>AMLO</strong>
                    <span className='tw-followCard-infoUserName'>@Amlo</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}