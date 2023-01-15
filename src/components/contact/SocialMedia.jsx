import React from 'react'
import './socialMedia.css'
import { Row } from 'react-bootstrap'

const SocialMedia = ({name, info, link, icon}) => {
  return (
    <Row className='border border-2 justify-content-center text-center align-items-center' id='contact-row'>
        <p id='icon'>{icon}</p>
        <p id='name'>{name}</p>
        <p id='info'>{info}</p>
        <a className='contact' href={link} target="_blank">Send a message</a>
    </Row>
  )
}

export default SocialMedia