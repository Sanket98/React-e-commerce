import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const history = useNavigate();
    const [inpVal, setInpVal] = useState({ email: "", password: "" })
    const [data, setData] = useState([])
    console.log(inpVal)
    const getData = (e) => {
        const { value, name } = e.target;
        setInpVal(() => {
            return {
                ...inpVal, [name]: value
            }
        })
    }
    //add data on local storage
    const addData = (e) => {
        e.preventDefault();
        const getUserArr = localStorage.getItem("ashu")
        console.log(getUserArr)

        const { email, password } = inpVal;

        if (email === "") {
            alert("email field is required")
        }
        else if (!email.includes("@")) {
            alert("please enter valid email address")
        } else if (password.includes("@")) {
            alert("please add special symbol")
        }
        else if (password.length < 5) {
            alert("not a valid password")
        }
        else {

            if (getUserArr && getUserArr.length) {
                const userData = JSON.parse(getUserArr);
                const userlogin = userData.filter((el, k) => {
                    return el.email === email && el.password === password
                })
                if(userlogin.length === 0){
                    alert("email does not exist")
                }else{
                    alert("user login sucessfully")
                    history("/")
                }
            }

        }
    }
    return (
        <>
            <div className='login_form shadow-lg py-5 mt-5'>
                <Container>
                    <div className='text-center'>
                        <h2>Login</h2>
                        <h4>Enter Login details to get access
                        </h4>
                    </div>

                    <Form className="mt-5 px-4">
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Username Or Email Address</Form.Label>
                            <Form.Control onChange={getData} name="email" type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={getData} name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-4 mt-4 d-flex justify-content-between" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Keep Me Logged In" />
                            <Link to="">Forgot Password?</Link>
                        </Form.Group>
                        <div className='d-flex align-items-center justify-content-between'>

                            <h5>Don’t have an account? <Link to="/signup">Sign Up</Link> here</h5>
                            <Button className='red_btn' onClick={addData} type="submit">
                                Submit
                            </Button></div>
                    </Form>
                </Container>
            </div>

        </>
    )
}

export default Login