import React from 'react'
import Intro from './Intro'
import Navigation from './Navigation'
import Skills from './Skills'

function Home(){
    return(
        <div>
            {<Intro />}
            {<Navigation />}
            {<Skills />}
        </div>
    )
}

export default Home