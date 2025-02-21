import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"

const TopContent = () => {
    return (
        <div className='topContent'>
            <div className='topContent_container'>
                <h1>Mr.Rupal Reddy</h1>
                <p>A professional Web App Developer</p>
                <a href="https://drive.google.com/file/d/1Re3cTROV0rkIKyWT5bGph8gQTA3tgF-4/view?usp=sharing">
                    <button className='topContent_downloadButton'>Download CV</button>
                </a>
                <Link to="project" smooth={true} duration={500}>
                    <button className='topContent_workButton'>My Work</button>
                </Link>
            </div>
        </div>
    )
}

export default TopContent