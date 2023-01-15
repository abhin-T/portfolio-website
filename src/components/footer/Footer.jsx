import React from 'react'
import './footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <Container fluid id="footer-div" className='justify-content-center align-items-center'>
        <Container className='align-items-center p-5'>
            <Row>
                <Col>
                    <h4>Abhin Tomar</h4>
                    <p className='footer'>A computer science student experienced in working with both the front-end and back-end sides of an application</p>
                </Col>
                <Col className='d-flex justify-content-end'>
                    <Container fluid className='m-0 p-0 w-auto'>
                        <h4>Socials</h4>
                        <p className='footer' id='icons'>
                            <a href="mailto:abhintomar1@gmail.com" target="_blank"><MdOutlineEmail/></a>
                            <a href="https://www.instagram.com/abhin_10" target="_blank"><FaInstagram/></a>
                            <a href='https://www.linkedin.com/in/abhin-tomar-5724a1235/' target="_blank"><FaLinkedin/></a>
                            <a href="https://wa.me/16477879055" target="_blank"><FaWhatsapp/></a>
                            <a href='https://github.com/abhin-T' target="_blank"><FaGithub/></a>
                        </p> 
                    </Container>
                </Col>
            </Row>
            <hr />
            <p className='text-center' id="copyright">© Copyright 2023. Made by <a id="web-link-footer" href="https://abhinsportfolio.netlify.app/">Abhin Tomar</a></p>
        </Container>
    </Container>
  )
}

export default Footer