import React from 'react';
import { Container, NavDropdown, Nav, Navbar, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faHeart, faMagnifyingGlassPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Header';
import Footer from './Footer';




const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const items = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

    };
    return (
        <>


<Header />
            <div>
                <div>

                    <Slider {...settings}>
                        <div className='position-relative'>
                            <div className='slider '>
                                <img alt='slider1' src='/images/slider1.jpg' />
                                <Container>
                                    <div className=' position-absolute slider_caption '>
                                        <h3 className=''>Fashion Sale</h3>
                                        <h2>Minimal Womenz Style</h2>
                                        <p className='mb-5'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.

                                        </p>
                                        <Link to="" className='bg-dark text-white px-4 py-3 inline-block black_btn '>Shop Now</Link>
                                    </div>
                                </Container>

                            </div>
                        </div>
                        <div className='slider'>
                            <img alt='slider1' src='/images/slider2.jpg' />
                            <Container>
                                <div className=' position-absolute slider_caption2'>
                                    <h3 className=''>Fashion Sale</h3>
                                    <h2>Minimal Menz Style</h2>
                                    <p className='mb-5'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.

                                    </p>
                                    <Link to="" className='bg-dark text-white px-4 py-3 inline-block black_btn '>Shop Now</Link>
                                </div>
                            </Container>
                        </div>

                    </Slider>
                </div>
                <div className='mt-3'>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <div className='item_section position-relative'>
                                    <img alt='item1' src='/images/items1.jpg' />
                                    <div className='overlay'>
                                        <h3>Men's Fashion</h3>
                                        <Link to="" className='text-decoration-underline'>Shop Now</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='item_section position-relative'>
                                    <img alt='item2' src='/images/items2.jpg' />
                                    <div className='overlay'>
                                        <h3>Women's Fashion</h3>
                                        <Link to="" className='text-decoration-underline'>Shop Now</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='item_section position-relative'>
                                    <img alt='item3' src='/images/items3.jpg' />
                                    <div className='overlay'>
                                        <h3>Kid's Fashion</h3>
                                        <Link to="" className='text-decoration-underline'>Shop Now</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='mt-3 tabs_item'>
                    <Container>
                        <div className=''>
                            <h2>Trending in Fashion</h2>
                            <Tabs
                                defaultActiveKey="men"
                                id="uncontrolled-tab-example"
                                className="mb-5 ms-auto "
                            >
                                <Tab eventKey="men" title="Men">
                                   
                                        <Container>
                                            <Slider {...items}>

                                                <div className='trending position-relative'>
                                                    <img alt='item1' src='/images/items1.jpg' />
                                                    <div className='trending_item position-absolute'>
                                                        <FontAwesomeIcon icon={faShoppingCart} />
                                                        <FontAwesomeIcon icon={faHeart} />
                                                        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                                                    </div>
                                                    <div className='item_price'>
                                                        <h2>Cashmere Tank + Bag</h2>
                                                        <h3>$98 <span className=''>$120</span></h3>
                                                    </div>
                                                </div>
                                                <div className='trending position-relative'>
                                                    <img alt='item1' src='/images/items1.jpg' />
                                                    <div className='trending_item position-absolute'>
                                                        <FontAwesomeIcon icon={faShoppingCart} />
                                                        <FontAwesomeIcon icon={faHeart} />
                                                        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                                                    </div>
                                                    <div className='item_price'>
                                                        <h2>Cashmere Tank + Bag</h2>
                                                        <h3>$98 <span className=''>$120</span></h3>
                                                    </div>
                                                </div>
                                                <div className='trending position-relative'>
                                                    <img alt='item1' src='/images/items1.jpg' />
                                                    <div className='trending_item position-absolute'>
                                                        <FontAwesomeIcon icon={faShoppingCart} />
                                                        <FontAwesomeIcon icon={faHeart} />
                                                        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                                                    </div>
                                                    <div className='item_price'>
                                                        <h2>Cashmere Tank + Bag</h2>
                                                        <h3>$98 <span className=''>$120</span></h3>
                                                    </div>
                                                </div>
                                                <div className='trending position-relative'>
                                                    <img alt='item1' src='/images/items1.jpg' />
                                                    <div className='trending_item position-absolute'>
                                                        <FontAwesomeIcon icon={faShoppingCart} />
                                                        <FontAwesomeIcon icon={faHeart} />
                                                        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                                                    </div>
                                                    <div className='item_price'>
                                                        <h2>Cashmere Tank + Bag</h2>
                                                        <h3>$98 <span className=''>$120</span></h3>
                                                    </div>
                                                </div>
                                                <div className='trending position-relative'>
                                                    <img alt='item1' src='/images/items1.jpg' />
                                                    <div className='trending_item position-absolute'>
                                                        <FontAwesomeIcon icon={faShoppingCart} />
                                                        <FontAwesomeIcon icon={faHeart} />
                                                        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                                                    </div>
                                                    <div className='item_price'>
                                                        <h2>Cashmere Tank + Bag</h2>
                                                        <h3>$98 <span className=''>$120</span></h3>
                                                    </div>
                                                </div>
                                               
                                            </Slider>
                                        </Container>
                                   
                                </Tab>
                                <Tab eventKey="women" title="Women">
                                    Tab content for Profile
                                </Tab>
                                <Tab eventKey="kids" title="Kids">
                                    Tab content for Profile
                                </Tab>
                                <Tab eventKey="Fashion" title="Fashion">
                                    Tab content for Profile
                                </Tab>

                            </Tabs>
                        </div>
                    </Container>

                </div>
            </div>

            <Footer />
        </>

    )

}
<script type="text/javascript" src="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.9.0/slick/slick.min.js"></script>





export default Home