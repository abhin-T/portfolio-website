import React from 'react'
import { Container } from 'react-bootstrap'
import Project from './Project'
import './work.css'
import websiteImg from '../../assets/portfolioWebsite.PNG' 
import faceFinderImg from '../../assets/faceFinder.PNG'
import birdGameImg from '../../assets/birdGame.PNG'

const Work = ({ useref }) => {
  return (
    <Container fluid className='section-div justify-content-center text-center align-items-center' id='projects-div' ref={useref}>
      <Container className='mx-5'>
        <h2 id='proj-heading'>My Projects</h2>
        <Project name="Abhin's Portfolio" description="This is my personal website that I created using React.js. It is like a portfolio containing my side projects, skills, contact information and who I am." image={websiteImg} github_link="" demo_link="" used={["React", "HTML", "CSS", "Javascript"]}/>
        <Project name="Face Finder & Face Finder Local" description="An application that uses Face recognition to try and get the name of the person that the user inputs from the image." image={faceFinderImg} github_link="" demo_link="" used={["React", "HTML", "CSS", "Javascript", "Node", "Express"]}/>
        <Project name="Pigeon Flyer" description="A pidgeon flying game created using Pygame (similar to Flappy Bird)." image={birdGameImg} github_link="" demo_link="" used={["Python"]}/>
      </Container>
    </Container>
  )
}

export default Work