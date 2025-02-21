import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Contact.css'


const Contact = () => {
    return (
        <Element className="contact" id="contact">
            <h1>Contact</h1>
            <div className='contact_container'>
                <p>
                    Email : <span>rupalreddy555@gmail.com</span>
                </p>
                <p>
                    Github : <span><a href='https://github.com/rupalreddy'>rupalreddy</a></span>
                </p>
                <div className='contact_icons'>
                    <a href="https://www.linkedin.com/in/rupalreddy-j08/">
                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>
                    </a>
                    <a href="google">
                        <IconButton>
                            <FacebookIcon />
                        </IconButton>
                    </a>
                    <a href="https://www.instagram.com/_rupalreddy/">
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>
                    </a>
                </div>
            </div>
        </Element>
    )
}

export default Contact