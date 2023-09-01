import React from 'react'
import './about.css'
import { Container, Row, Col } from 'react-bootstrap'
import TagCloud from '@frank-mayer/react-tag-cloud'

const About = ({ useref }) => {
  return (
    <Container className='justify-content-center align-items-center text-center mb-5 section-div' id='about-cont' ref={useref}>
      <Container className='text-center justify-content-center'>
        <h2>About Me</h2>
        <Row className='align-items-center about-row mt-5'>
        <Col>
          <Container className='rounded-5 p-5 about'>
            <p className='text-start'>I'm currently a <b>3rd year</b> computer science student at the <b>University of Toronto</b>.<br /><br />Computer science and programming have been a hobby for me ever since I was first introduced to the subject. Now, I often spend most of my free time learning new technologies that I can work with and creating fun and interesting projects. Check out some of my projects in the <b>Projects</b> section.<br /><br />I'm open to <b>Job / Internship</b> oppurtunities where I can contribute, learn, and grow. Feel free to contact me through any of my social media links posted here.</p>
          </Container>
        </Col>
        <Col id="sphere" className='justify-content-center'>
          <TagCloud options={() => ({
            radius: Math.min(500, window.innerWidth, window.innerHeight) / 2,
            initSpeed: "fast",
            maxSpeed: "fast",
            keep: false
          })}>
            {[
              "HTML",
              "CSS",
              "Python",
              "C",
              "React",
              "Java",
              "Javascript",
              "Node",
              "Bootstrap",
              "Express",
              "Flask",
              "Firebase",
              "MongoDB",
              "Bash",
              "Terminal",
              "Git"
              ]
            }
          </TagCloud>
        </Col>
      </Row>
      </Container>
    </Container>
  )
}

export default About