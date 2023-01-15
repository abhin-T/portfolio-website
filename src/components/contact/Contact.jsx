import React, { useRef } from 'react'
import './contact.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import SocialMedia from './SocialMedia'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser';

const Contact = ({ useref }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_591f57j', 'template_azipuvb', form.current, '3hS73gimnSUgp8f94');
    e.target.reset();
  };

  return (
    <Container fluid className='text-center justify-content-center align-items-center section-div' id="contact-div" ref={useref}>
      <Container>
        <h2>Contact Me</h2>
        <Row className='mt-5'>
          <Col className='justify-content-center d-flex flex-wrap'>
            <SocialMedia id="email" name="Email" info="abhintomar1@gmail.com" link="mailto:abhintomar1@gmail.com" icon={<MdOutlineEmail/>} />
            <SocialMedia name="WhatsApp" info="647-787-9055" link="https://wa.me/16477879055" icon={<FaWhatsapp/>} />
            <SocialMedia name="Instagram" info="abhin_10" link="https://www.instagram.com/abhin_10" icon={<FaInstagram/>} />
          </Col>
          <Col className='d-flex justify-content-start text-start'>
            <Form ref={form} onSubmit={sendEmail} id='form' className='w-100'>
              <Form.Group>
              <Form.Label>Full Name</Form.Label>
                <Form.Control name='name' placeholder='Full Name' type='name' required/>
              </Form.Group>
              <Form.Group>
              <Form.Label className='label-bot-1'>Email Address</Form.Label>
                <Form.Control name='email' placeholder='Your email' type='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
              </Form.Group>
              <Form.Group id="msg">
                <Form.Label className='label-bot-2'>Message</Form.Label>
                <textarea name="message" className='form-control' rows="10" placeholder='Message' required></textarea>
              </Form.Group>
              <Button id='submit-btn' variant='warning' size='lg' type='submit'>Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Contact