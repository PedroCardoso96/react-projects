import React from 'react'
import './possibility.css'

import possibilityImage from "../../assets/possibility.png"

const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className='gpt3__possibility-image'>
                <img src={possibilityImage} alt="possibility" />
            </div>
            <div className='gpt3__possibility-content'>
                <h4>Request early access</h4>
                <h1 className='gradient-text'>
                    The Possibility are beyond is your imagination.
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tenetur, laboriosam quas ex voluptas quae nobis libero sit autem. Sed consequatur vel enim quidem deserunt animi nam in provident. Iste?</p>
                <h4>Request early access</h4>
            </div>
        </div>
    )
}

export default Possibility