import React from 'react'
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import './ProjectContainer.css'

const ProjectContainer = () => {
    const projects = [
        {
            img: "https://s3-alpha.figma.com/hub/file/5263617650/c79a7c46-99cd-442d-9cbd-8d05e3d56b7c-cover.png",
            title: "Airbnb",
            desc: "Designed the website layout with HTML, positioned it with CSS And used Bootstrap for responsiveness" +
                "Utilized Bootstrap concepts such a grid layout for responsive design, carousel for image slideshows," +
                "modal for displaying additional contents and tap pane for organizing tabbed content.",
            link: "www.google.com",
        },
        {
            img: "https://s3-alpha.figma.com/hub/file/5263617650/c79a7c46-99cd-442d-9cbd-8d05e3d56b7c-cover.png",
            title: "Airbnb",
            desc: "Designed the website layout with HTML, positioned it with CSS And used Bootstrap for responsiveness" +
                "Utilized Bootstrap concepts such a grid layout for responsive design, carousel for image slideshows," +
                "modal for displaying additional contents and tap pane for organizing tabbed content.",
            link: "www.google.com",
        },
        {
            img: "https://s3-alpha.figma.com/hub/file/5263617650/c79a7c46-99cd-442d-9cbd-8d05e3d56b7c-cover.png",
            title: "Airbnb",
            desc: "Designed the website layout with HTML, positioned it with CSS And used Bootstrap for responsiveness" +
                "Utilized Bootstrap concepts such a grid layout for responsive design, carousel for image slideshows," +
                "modal for displaying additional contents and tap pane for organizing tabbed content.",
            link: "www.google.com",
        },
        {
            img: "https://s3-alpha.figma.com/hub/file/5263617650/c79a7c46-99cd-442d-9cbd-8d05e3d56b7c-cover.png",
            title: "Airbnb",
            desc: "Designed the website layout with HTML, positioned it with CSS And used Bootstrap for responsiveness" +
                "Utilized Bootstrap concepts such a grid layout for responsive design, carousel for image slideshows," +
                "modal for displaying additional contents and tap pane for organizing tabbed content.",
            link: "www.google.com",
        },
        {
            img: "https://s3-alpha.figma.com/hub/file/5263617650/c79a7c46-99cd-442d-9cbd-8d05e3d56b7c-cover.png",
            title: "Airbnb",
            desc: "Designed the website layout with HTML, positioned it with CSS And used Bootstrap for responsiveness" +
                "Utilized Bootstrap concepts such a grid layout for responsive design, carousel for image slideshows," +
                "modal for displaying additional contents and tap pane for organizing tabbed content.",

            link: "www.google.com",
        },
        {
            img: "https://s3-alpha.figma.com/hub/file/5263617650/c79a7c46-99cd-442d-9cbd-8d05e3d56b7c-cover.png",
            title: "Airbnb",
            desc: "Designed the website layout with HTML, positioned it with CSS And used Bootstrap for responsiveness" +
                "Utilized Bootstrap concepts such a grid layout for responsive design, carousel for image slideshows," +
                "modal for displaying additional contents and tap pane for organizing tabbed content.",
            link: "www.google.com",
        },
        {
            img: "https://s3-alpha.figma.com/hub/file/5263617650/c79a7c46-99cd-442d-9cbd-8d05e3d56b7c-cover.png",
            title: "Airbnb",
            desc: "Designed the website layout with HTML, positioned it with CSS And used Bootstrap for responsiveness" +
                "Utilized Bootstrap concepts such a grid layout for responsive design, carousel for image slideshows," +
                "modal for displaying additional contents and tap pane for organizing tabbed content.",
        },
        {
            img: "https://s3-alpha.figma.com/hub/file/5263617650/c79a7c46-99cd-442d-9cbd-8d05e3d56b7c-cover.png",
            title: "Airbnb",
            desc: "Designed the website layout with HTML, positioned it with CSS And used Bootstrap for responsiveness" +
                "Utilized Bootstrap concepts such a grid layout for responsive design, carousel for image slideshows," +
                "modal for displaying additional contents and tap pane for organizing tabbed content.",
            link: "www.google.com",
        },

    ];
    return (
        <Element className="projectContainer" id="projects">
            <h1>Projects</h1>
            <p>
                Here are some projects which I done for making lives of people easy
            </p>
            <div className='projectContainer_projects'>
                {
                    projects.map((project, index) => {
                        return (
                            <Project key={index}
                                img={project.img}
                                title={project.title}
                                desc={project.desc}
                                link={project.link} />
                        )
                    })
                }
            </div>
        </Element>
    )
}

export default ProjectContainer