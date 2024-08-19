import './App.css'
//se importan hooks que son recursos para darle vida a una pagina web
import { useState } from 'react';
export function TwitterFollowCard({ userName,children,isFollowingP }) {
    //el state regresa un array de dos posiciones el primero es el valor del estado 
    //el segundo es una funcion que nos permite actualizar el estado 
    //desestructuracion js
    const [isFollowing,setIsFollowing] = useState(isFollowingP)
    

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ?'tw-followCard-button is-following'
    :'tw-followCard-button' 

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    const imageSource = `https://unavatar.io/${userName}`;
    
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="Avatar" 
                    src={imageSource} 
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button 
                className={buttonClassName}
                onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}
