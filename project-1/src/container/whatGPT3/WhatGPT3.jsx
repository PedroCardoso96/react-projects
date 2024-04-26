import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='whgpt3'>
            <div className='gpt3_whatgpt3-feature'>
                <Feature title="O que é Warhammer 40k" text="Warhammer 40k abrange um vasto universo ficcional ambientado 38 milênios no futuro. Suas várias facções e raças incluem: o Imperium of Man, um império interestelar totalitário e descentralizado que tem governado a maior parte da humanidade há milênios, os Orks, os Eldar e outros." />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>As possibilidades estão além da sua imaginação</h1>
                <p>Explore o Universo</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title="Chatbots" text="Fale com nosso chatbot para mais inforações" />
                <Feature title="Knowlegebase" text="A ambientação do Warhammer 40.000 é usada em diversos jogos de mesa, games, e obras de ficção, incluindo obras licenciadas publicadas pela Black Library, uma subsidiária da Games Workshop." />
                <Feature title="Education" text="Mesmo os leitores/pesquisadores da franquia sabem muito pouco, além do fato dele ter nascido na Anatólia antiga (Tecnicamente sendo turco) e dele ter provavelmente inspirado a história de São Jorge, e de ter provavelmente assumido a identidade de várias figuras famosas do mundo para influenciar a humanidade, tentando tirá-la das garras do Caos." />
            </div>
        </div>
    )
}

export default WhatGPT3