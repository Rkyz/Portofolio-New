import React from 'react'
import '../experience/Experience.css'
import { HorizontalChart } from './HorizontalChart'
import Pengalaman from './Pengalaman'

const Experience = () => {
  return (
    <div>
        <section id='experience'>
        <h5 className="text-light">Portofolio</h5>
        <h2>Experience / Skill</h2>
          <div className="container-experience">
            <div className="pages-two">
            <HorizontalChart/>
            </div>
            <div className="pages-one">
            <Pengalaman/>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Experience
