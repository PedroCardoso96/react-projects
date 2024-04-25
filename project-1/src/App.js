import React from 'react'

import { Article, Brand, CTA, Feature, Navbar } from "./components";
import { Blog, Features, Footer, Header, WhatGPT3, Possibility } from "./container";
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>

      <div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <CTA />
        <Blog />
        <Footer />
      </div>

    </div>
  )
}

export default App