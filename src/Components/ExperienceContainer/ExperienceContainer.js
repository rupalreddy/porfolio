import React from 'react'
import { Element } from 'react-scroll'
import "../ExperienceBox/Experience"
import Experience from '../ExperienceBox/Experience'
import "./ExperienceContainer.css"


const ExperienceContainer = () => {
    return (
        <Element className="experienceContainer" id="exp">
            <h2>Experience</h2>
            <div className='experienceContainer_info'>
                <Experience number="6M" title="Intern" />
                <Experience number="6+" title="Projects" style={{ backgroundColor: "#f64c08" }} />
                <Experience number="5M" title="Volunteer" />
                <Experience number="1+" title="College Project" />
            </div>
        </Element>
    )
}

export default ExperienceContainer