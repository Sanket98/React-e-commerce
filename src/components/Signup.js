import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link, json, useNavigate } from 'react-router-dom'

function Signup() {
    const loginPage = useNavigate();
    const [inpVal, setInpVal] = useState({ name: "", email: "", password: "" })
    const[data,setData]=useState([])
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
        const { name,email,password} = inpVal;

        if(name===""){
            alert("name not valid")
        }
        else if(email===""){
            alert("email field is required")
        }
        else if(!email.includes("@")){
            alert("please enter valid email address")
        }else if(password.length<5){
            alert("not a valid password")
        }else{
            console.log("data added succesfully");

            localStorage.setItem("ashu",JSON.stringify([...data,inpVal]));
            loginPage("/login")
        }
    }

    return (
        <>
            <div className='login_form shadow-lg py-5 mt-5'>
                <Container>
                    <div className='text-center'>
                        <h2>Sign Up</h2>
                        <h4>Create your account to get full access
                        </h4>
                    </div>

                    <Form className="mt-5 px-4">
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control onChange={getData} name="name" type="email" placeholder="Enter full name" />


                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail1">
                            <Form.Label>Enter Email Address</Form.Label>
                            <Form.Control onChange={getData} type="email" name="email" placeholder="Enter email" />

                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={getData} type="password" name="password" placeholder="Enter Password" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword1">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onChange={getData} type="password" name='password' placeholder="Confirm Password" />
                        </Form.Group>
                        <Form.Group className="mb-4 mt-4 d-flex justify-content-between" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Keep Me Logged In" />
                            <Link to="">Forgot Password?</Link>
                        </Form.Group>
                        <div className='d-flex align-items-center justify-content-between'>

                            <h5>Already have an account?<Link to="/login"> Login</Link> here</h5>
                            <Button className='red_btn' type="submit" onClick={addData}>
                                Sign Up
                            </Button></div>
                    </Form>
                </Container>
            </div>

        </>
    )
}

export default Signup