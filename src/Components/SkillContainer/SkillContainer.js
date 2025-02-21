import React from 'react'
import { Element } from 'react-scroll'
import skillimg from "../../assets/istockphoto-915160652-612x612.jpg"
import { LinearProgress } from '@mui/material'
import "./SkillContainer.css"

const SkillContainer = () => {
    return (
        <Element className='skillContainer' id='skills'>
            <div className='skillContainer_image'>
                <img src={skillimg} alt="" />
            </div>
            <div className='skillContainer_text'>
                <h2>SKILLSET</h2>
                <div className='skillContainer_skillSet'>
                    <h5>React</h5>
                    <div className='skillContainer_slider skillContainer_slider1'>
                        <LinearProgress variant='determinate' value={85} />
                    </div>
                </div>

                <div className='skillContainer_skillSet'>
                    <h5>Java</h5>
                    <div className='skillContainer_slider skillContainer_slider2'>
                        <LinearProgress variant='determinate' value={80} />
                    </div>
                </div>
                <div className='skillContainer_skillSet'>
                    <h5>JavaScript</h5>
                    <div className='skillContainer_slider skillContainer_slider3'>
                        <LinearProgress variant='determinate' value={80} />
                    </div>
                </div>
                <div className='skillContainer_skillSet'>
                    <h5>MySQL</h5>
                    <div className='skillContainer_slider skillContainer_slider4'>
                        <LinearProgress variant='determinate' value={75} />
                    </div>
                </div>
                <div className='skillContainer_skillSet'>
                    <h5>SpringBoot</h5>
                    <div className='skillContainer_slider skillContainer_slider5'>
                        <LinearProgress variant='determinate' value={80} />
                    </div>
                </div>
                <div className='skillContainer_skillSet'>
                    <h5>REST API</h5>
                    <div className='skillContainer_slider skillContainer_slider6'>
                        <LinearProgress variant='determinate' value={70} />
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default SkillContainer