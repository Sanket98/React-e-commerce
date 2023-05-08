import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Form, Button, Col, Row, ListGroup } from 'react-bootstrap'
import { faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='footer text-white mt-4'>
        <Container>
          <Row className='footer1'>
            <Col md={4}>
              <h4>Subscribe Newsletter
                <span className='mt-3'>Subscribe newsletter to get 5% on all products.</span></h4></Col>
            <Col md={6}>  <Form className='d-flex'>
              <Form.Group className="w-100 rounded-0" controlId="formBasicEmail" >

                <Form.Control type="email" placeholder="Enter email" className='rounded-0 py-3' />

              </Form.Group>
              <Button variant="primary" type="submit" className='rounded-0 red_btn border-0 text-white ms-3 px-4'>
                Subscribe
              </Button>
            </Form></Col>
            <Col md={2}> <div className='brand_icon'>
              <Link to=""><FontAwesomeIcon icon={faFacebook} /></Link>
              <Link to="">  <FontAwesomeIcon icon={faInstagram} /></Link>
              <Link to=""> <FontAwesomeIcon icon={faYoutube} /></Link>
            </div></Col>
          </Row>
          <Row>
            <Col lg={4} >
              <Link to="" className='footer_logo'><img alt='item1' src='/images/logo.png' /><span>Smriti</span></Link>
            </Col>
            <Col lg={2} sm={6}>
              <h5>Shop Men</h5>
              <ListGroup>
                <Link to=""><ListGroup.Item>Clothing Fashion</ListGroup.Item></Link>
                <Link to=""><ListGroup.Item>Winter</ListGroup.Item></Link>
                <Link to=""><ListGroup.Item>Summer</ListGroup.Item></Link>
                <Link to=""><ListGroup.Item>Formal</ListGroup.Item></Link>
                <Link to=""><ListGroup.Item>Casual</ListGroup.Item></Link>
              </ListGroup>
            </Col>
            <Col lg={2} sm={6}> <h5>Shop Women</h5><ListGroup>
              <Link to=""><ListGroup.Item>Clothing Fashion</ListGroup.Item></Link>
              <Link to=""><ListGroup.Item>Winter</ListGroup.Item></Link>
              <Link to=""><ListGroup.Item>Summer</ListGroup.Item></Link>
              <Link to=""><ListGroup.Item>Formal</ListGroup.Item></Link>
              <Link to=""><ListGroup.Item>Casual</ListGroup.Item></Link>
            </ListGroup></Col>
            <Col lg={2} sm={6}> <h5>Shop Kids</h5> <ListGroup>
              <Link to=""><ListGroup.Item>Clothing Fashion</ListGroup.Item></Link>
              <Link to=""><ListGroup.Item>Winter</ListGroup.Item></Link>
              <Link to=""><ListGroup.Item>Summer</ListGroup.Item></Link>
              <Link to=""><ListGroup.Item>Formal</ListGroup.Item></Link>
              <Link to=""><ListGroup.Item>Casual</ListGroup.Item></Link>
            </ListGroup></Col>
            <Col lg={2} sm={6}> <h5>Quick Links</h5> <ListGroup>
              <Link to=""><ListGroup.Item>Track Your Order
              </ListGroup.Item></Link>
              <Link to=""><ListGroup.Item>Support
              </ListGroup.Item></Link>
              <Link to=""><ListGroup.Item>FAQ
              </ListGroup.Item></Link>
              <Link to=""><ListGroup.Item>Carrier
              </ListGroup.Item></Link>
              <Link to=""><ListGroup.Item>About</ListGroup.Item></Link>
              <Link to=""><ListGroup.Item>Contact Us
              </ListGroup.Item></Link>
            </ListGroup></Col>
          </Row>
        </Container>

      </div></>
  )
}

export default Footer