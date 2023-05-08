import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Breadcrumb, Container } from 'react-bootstrap'
import { faShareNodes, faSquareShareNodes, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function ProductPage() {
    return (
        <div>
            <Header />
            <div className='cart_head'>
                <h2>Product Page</h2>
                <Breadcrumb className='justify-content-center d-flex'>
                    <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Product Page
                    </Breadcrumb.Item>

                </Breadcrumb>
            </div>
            <Container>
                <div className="product_detail px-4 py-2 d-flex">


                    <img alt='item1' src='/images/items1.jpg' />
                    <div className='p-5 text-start'>
                        <h4 className='fw-bold'>Tank Top <span>(in Women)</span></h4>

                        <h6>$50.00</h6>
                        <ul className='list-unstyled d-flex mb-1'>
                            <li><FontAwesomeIcon icon={faStar} /></li>
                            <li><FontAwesomeIcon icon={faStar} /></li>
                            <li><FontAwesomeIcon icon={faStar} /></li>
                            <li><FontAwesomeIcon icon={faStar} /></li>
                            <li><FontAwesomeIcon icon={faStarHalfStroke} /></li>
                        </ul>
                        <h5>(120 reviews)</h5>
                        <div className='mt-4 d-flex align-items-center'>


                            <Link to="" className='red_circle_btn fw-bold '>
                                Add to cart
                            </Link> 
                            <Link to="" ><FontAwesomeIcon icon={faShareNodes} className='share_btn' /></Link>  </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default ProductPage