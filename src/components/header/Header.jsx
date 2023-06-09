import React from 'react'
import CTA from './CTA'
// import ME from '../../assets/smile.png'
import HeaderSocial from './HeaderSocial'
import AnimationText from './AnimationText'
import '../header/Header.css'
import Molang from './Molang'

const Header = () => {

    return (
        <header>
            <div id='home' className="container header_container">
                <h5>Hello</h5>
                <AnimationText text="Portofolio" delay={1}/>
                <h5 className="text-light">Front-end</h5>
                <CTA/>
                <HeaderSocial/>
                <div className="me">
                    <Molang />
                </div>
                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
