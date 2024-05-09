import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='whgpt3'>
            <div className='gpt3_whatgpt3-feature'>
                <Feature title="O que é GPT-3" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum asperiores molestiae exercitationem explicabo tempora ducimus perferendis hic quisquam dolor voluptates saepe officiis fugiat, accusamus, magni voluptatum. Labore voluptates doloremque quasi!" />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>The possibility is beyond your imagination</h1>
                <p>Explore the GPT3</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title="Chatbots" text="Contact us with the chatbot" />
                <Feature title="Knowlegebase" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum asperiores molestiae exercitationem explicabo tempora ducimus perferendis hic quisquam dolor voluptates saepe officiis fugiat" />
                <Feature title="Education" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum asperiores molestiae exercitationem explicabo tempora ducimus perferendis hic quisquam dolor voluptates saepe officiis fugiat, accusamus, magni voluptatum. Labore voluptates doloremque quasi!Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
            </div>
        </div>
    )
}

export default WhatGPT3