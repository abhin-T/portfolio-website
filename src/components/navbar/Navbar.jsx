import React, { useEffect } from 'react'
import './navbar.css'
import { Navbar, Container, Nav} from 'react-bootstrap'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const NavigationBar = ({ about, projects, contact, homeSelected, aboutSelected, projSelected, contactSelected }) => {
  let items = document.querySelectorAll(".nav-item");
  useEffect(() => {
    items = document.querySelectorAll(".nav-item");
  }, [])

  if (items.length == 4) {

    if (homeSelected) {
      items[0].classList.add("selected");
    } else {
      items[0].classList.remove("selected");
    }

    if (aboutSelected) {
      items[1].classList.add("selected");
    } else {
      items[1].classList.remove("selected");
    }

    if (projSelected) {
      items[2].classList.add("selected");
    } else {
      items[2].classList.remove("selected");
    }

    if (contactSelected) {
      items[3].classList.add("selected");
    } else {
      items[3].classList.remove("selected");
    }
  }
  

  const scrollToSection = (el) => {
    window.scrollTo({
      top: el.current.offsetTop-50,
      behavior: "smooth"
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <Navbar className='navigation sticky-top'>
      <Container fluid>
      <Nav>
          <Nav.Link className='nav-icon' href='https://www.linkedin.com/in/abhin-tomar-5724a1235/' target="_blank"><FaLinkedin/></Nav.Link>
          <Nav.Link className='nav-icon' href='https://github.com/abhin-T' target="_blank"><FaGithub/></Nav.Link>
        </Nav>
      <Nav>
        <Nav.Link onClick={() => scrollToTop()} className='nav-item'>HOME</Nav.Link>
        <Nav.Link onClick={() => scrollToSection(about)} className='nav-item'>ABOUT</Nav.Link>
        <Nav.Link onClick={() => scrollToSection(projects)} className='nav-item'>PROJECTS</Nav.Link>
        <Nav.Link onClick={() => scrollToSection(contact)} className='nav-item'>CONTACT</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar