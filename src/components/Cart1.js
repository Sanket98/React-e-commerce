import React, { useState } from 'react'
import { Breadcrumb, Button, Container, Form, FormLabel } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Cart1() {

    const initial_data = [
        { "id": 1, "name": "T-Shirt", "price": 360, "quantity": 0 },
        { "id": 2, "name": "Trousers", "price": 520, "quantity": 0 },
        { "id": 3, "name": "Jackets", "price": 650, "quantity": 0 },
    ];
    const [data, setData] = useState(initial_data);
    const [total, setTotal] = useState(0)

    const increment = (id) => {
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setData(updatedData);
    }

    const decrement = (id) => {
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
        setData(updatedData);
    }
    const totalItem = (price, type) => {
        debugger
        (type === "add") ? setTotal(total + price) : setTotal(total - price)
    }
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
                    <Table className='mt-5'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th colSpan={2}>Product</th>
                                <th>Price	</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td colSpan={2}>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <Form className='d-flex align-items-center w-100 justify-content-center'>
                                            <Button className='rounded-0 bg-white text-dark border-0 disabled:bg-gray' disabled={item.quantity === 0} onClick={() => { decrement(item.id); totalItem(item.price, "subtract") }}><span> - </span></Button>
                                            <span className='px-2'>{item.quantity}</span>
                                            <Button className='rounded-0 bg-white text-dark border-0 disabled:bg-gray' disabled={item.quantity === 10} onClick={() => { increment(item.id); totalItem(item.price, "add") }}><span> + </span></Button>
                                        </Form>
                                    </td>
                                    <td>${item.price * item.quantity}</td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </Table>
                    <Link to="" className='red_circle_btn '>
                        Update cart
                    </Link>
                    <Table>
                        <tr className="">
                            <td>SubTotal</td>
                            <td>{total}
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

export default Cart1