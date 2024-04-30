import React from 'react'
import './header.css'

import people from '../../assets/people.png'
import ai from '../../assets/spacehelmet.png'

const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>Pessoas como eu e você foram feitas para mudar o mundo.</h1>
                <p>Ele é um homem cheio de enigmas, com até mesmo seus motivos desconhecidos, mas tem uma verdade que permanece, imutável e suprema, durante todo esse tempo: O Imperador protege.</p>

                <div className='gpt3__header-content__input'>
                    <input type='email' placeholder='You e-mail adress'></input>
                    <button type='submit'>Get Start</button>
                </div>

                <div className='gpt3__header-content__people'>
                    <img src={people} alt='people' />
                    <p>1,600 people request to join the army</p>
                </div>
            </div>
            <div className='gpt3__header-image'>
                <img src={ai} alt='ai' />
            </div>
        </div>
    )
}

export default Header