import React from 'react'
import { Container, Button } from 'react-bootstrap'
import './intro.css'
import { TypeAnimation } from 'react-type-animation';
import resume from '../../assets/resume.pdf'

const Intro = ({ useref }) => {
  return (
    <Container fluid className='text-center justify-content-center align-items-center section-div' id='intro-cont' ref={useref}>
      <Container className='text-center justify-content-center'>
        <TypeAnimation sequence={["HI, I'M ABHIN TOMAR"]} wrapper="h1" cursor={false} repeat={0} speed={15}/>
        <Container fluid className='d-flex m-0 p-0 text-center justify-content-center'>
          <p id="intro-p">A computer science student with a strong grasp of the full application development cycle, spanning front-end and back-end domains</p>
        </Container>
        <a href={resume} download>
          <Button variant='warning' size='lg' className='resume-btn' download>RESUME</Button>
        </a>
      </Container>
    </Container>
  )
}

export default Intro