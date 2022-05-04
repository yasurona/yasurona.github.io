import React from 'react'
// import Container from '@material-ui/core/Container'
import Navbar from './components/Navbar'
import MyAvatar from './components/MyAvatar'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import ScrollUp from './utils/ScrollUp'

const App: React.FC = () => {
    return (
        <>
            {/*<Container fixed>*/}
                <section>
                    <Navbar />
                </section>
                <section>
                    <MyAvatar />
                </section>
                <section id='about'>
                    <About />
                </section>
                <section id='skills'>
                    <Skills />
                </section>
                <section id='works'>
                    <Works />
                </section>
                <section id='contact'>
                    <Contact />
                </section>
            {/*</Container>*/}
            <ScrollUp />
        </>
    );
}

export default App;