import React, { useState } from 'react'
import { Breadcrumb, Button, Container, Form, FormLabel, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Cart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Minimalistic shop for multipurpose use', price: "$360", quantity: 1 },
        { id: 2, name: 'Minimalistic shop for multipurpose use', price: "$360", quantity: 1 },
        { id: 3, name: 'Minimalistic shop for multipurpose use', price: "$360", quantity: 1 },
    ]);

    const increaseCartItem = (id) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCartItems);
    };

    const decreaseCartItem = (id) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedCartItems);
    };

    return (
        <>

            <Header />
            <div className='cart'>
                <div className='cart_head'>
                    <h2>Cart</h2>
                    <Breadcrumb className='justify-content-center d-flex'>
                        <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                            Cart
                        </Breadcrumb.Item>

                    </Breadcrumb>
                </div>
                <Container>
                    <Table className='mt-5 '>
                        <thead>
                            <tr>

                                <th colSpan={2}>Product</th>
                                <th>Price	</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td colSpan={2}>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <Form className='d-flex align-items-center w-100 justify-content-center'>
                                                <Button className='rounded-0 bg-white text-dark border-0' onClick={() => increaseCartItem(item.id)}>+</Button>
                                                <h4>{cartItems}</h4>
                                                <Button className='rounded-0 bg-white text-dark border-0' onClick={() => decreaseCartItem(item.id)}>-</Button>
                                            </Form>
                                        </td>
                                        <td>$720.00</td>
                                    </tr>
                                ))
                            }
                            {/* <tr>
                                <td className='d-none'>1</td>
                                <td colSpan={2}>Minimalistic shop for multipurpose use</td>
                                <td>$360.00</td>
                                <td >
                                    <Form className='d-flex align-items-center w-100 justify-content-center'>
                                        <Button className='rounded-0 bg-white text-dark border-0' onClick={() => setAdd(add + 1)}>+</Button>
                                        <h4>{add}</h4>
                                        <Button className='rounded-0 bg-white text-dark border-0' onClick={() => setAdd(add - 1)}>-</Button>
                                    </Form>

                                </td>
                                <td>$720.00</td>
                            </tr>

                            <tr >
                                <td className='d-none'>2</td>
                                <td colSpan={2}>Minimalistic shop for multipurpose use</td>
                                <td>$360.00</td>
                                <td>
                                    <Form className='d-flex align-items-center w-100 justify-content-center'>
                                        <Button className='rounded-0 bg-white text-dark border-0' onClick={() => setAdd(add + 1)}>+</Button>
                                        <h4>{add}</h4>
                                        <Button className='rounded-0 bg-white text-dark border-0' onClick={() => setAdd(add - 1)}>-</Button>
                                    </Form></td>
                                <td>$720.00</td>
                            </tr> */}

                        </tbody>

                    </Table>
                    <Link to="" className='red_circle_btn '>
                        Update cart
                    </Link>
                    <Table>
                        <tr className="">
                            <td>SubTotal</td>
                            <td>$2160.00
                            </td>
                        </tr>
                        <tr className="">
                            <td>Shipping</td>
                            <td>
                                <Form className='border-bottom py-4'>
                                    <div className='d-flex'>
                                        <Form.Check type="radio" aria-label="radio 1" className='me-3' />
                                        <FormLabel className='me-4'>Flat Rate: $5.00 </FormLabel>

                                    </div>
                                    <div className='d-flex'>
                                        <Form.Check type="radio" aria-label="radio 1" className='me-3' />
                                        <FormLabel className='me-4'>Free Shipping  </FormLabel>

                                    </div>
                                    <div className='d-flex'>
                                        <Form.Check type="radio" aria-label="radio 1" className='me-3' />
                                        <FormLabel >Flat Rate: $10.00  </FormLabel>

                                    </div>
                                    <div className='d-flex'>
                                        <Form.Check type="radio" aria-label="radio 1" className='me-3' />
                                        <FormLabel >Local Delivery: $2.00  </FormLabel>

                                    </div>
                                    <Form.Select aria-label="Default select example" className='mb-3'>
                                        <option>Select Country</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <Form.Select aria-label="Default select example" className='mb-3'>
                                        <option>Select a state</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <Form.Group className="mb-4" controlId="formBasicEmail">

                                        <Form.Control type="text" placeholder="PostCode / ZipCode" />

                                    </Form.Group>
                                    <Link to="" className='red_circle_btn '>
                                        Update Details
                                    </Link>
                                </Form>
                                <div className='d-flex align-items-center mt-3'>
                                    <Link to="" className='red_circle_btn '>
                                        Continue Shopping
                                    </Link>
                                    <Link to="" className='red_circle_btn ms-3'>
                                        Proceed to checkout
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </Table>


                </Container>
            </div>

            <Footer />

        </>

    )
}

export default Cart