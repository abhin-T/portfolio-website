import React from 'react'
import './project.css'
import { Row, Col, Container, Image, Button, Badge } from 'react-bootstrap'

const Project = ({image, name, description, demo_link, github_link, used}) => {
    return (
        <Row className='mt-5'>
            <Col className='align-items-center d-flex pb-5 flex-wrap justify-content-center'>
                <Image fluid src={image} rounded className='h-75 w-85' />
                <a href={demo_link}><Button variant='warning' size='lg' className='proj-btn'>Live Demo</Button></a>
                <a href={github_link}><Button variant='warning' size='lg' className='proj-btn'>Github</Button></a>
            </Col>
            <Col className='d-flex pb-5'>
                <Container className='text-start pt-5' id='proj-desc'>
                    <h3>{name}</h3>
                    <p id="desc">{description}</p>
                    {used.map(tech => {
                        return <Badge key={used.indexOf(tech)} bg='secondary'>{tech}</Badge>
                    })}
                </Container>
            </Col>
        </Row>
    )
}

export default Project