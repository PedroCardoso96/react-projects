import React from 'react'
import './header.css'

import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque quam iste facere in iusto obcaecati consequatur ipsa dolorem officiis, corrupti voluptate neque assumenda</p>
                

                <div className='gpt3__header-content__input'>
                    <input type='email' placeholder='You e-mail adress'></input>
                    <button type='submit'>Get Start</button>
                </div>

                <div className='gpt3__header-content__people'>
                    <img src={people} alt='people' />
                    <p>1,600 people request to early access</p>
                </div>
            </div>
            <div className='gpt3__header-image'>
                <img src={ai} alt='ai' />
            </div>
        </div>
    )
}

export default Header