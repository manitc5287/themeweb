import React, { useState } from 'react'
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import image1 from "../../assets/women/login/image1 (1).jpg";
import image2 from "../../assets/women/login/image1 (2).jpg";
import "./loginregister.css";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Newsletter from '../Newsletter/Newsletter';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate()


    const CollectData = async (event) => {
        event.preventDefault();
        console.warn(name, password, email);
        let result = await fetch("http://127.0.0.1:5000/register", {
            method: "post",
            body: JSON.stringify({ name, password, email }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        result = await result.json();
        localStorage.setItem("currentUser", JSON.stringify(result.result))
        localStorage.setItem("token", JSON.stringify(result.auth))
        navigate("/")
        console.log(result)
    }

    const SendData = async (event) => {
        event.preventDefault();
        console.warn(email, password);
        let result = await fetch("http://127.0.0.1:5000/login", {
            method: "post",
            body: JSON.stringify({
                email, password
            }),
            headers: {
                "Content-Type": "application/json"
            }

        })

        result = await result.json();
        if (result.auth) {
            localStorage.setItem("currentUser", JSON.stringify(result.user))
            localStorage.setItem("token", JSON.stringify(result.auth))
            navigate("/")
            console.log(result)
        }

        else {
            alert("Enter Correct Email and Password.")
        }

    }

    return (
        <div>
            <Header />
            <div className='container'>
                <div className='row'>

                    <div className='col-lg-6'>


                        <img src={image1} className='img-fluid'></img>



                    </div>

                    <div className='col-lg-6'>
                        <div className='login_details'>
                            <ul class="nav nav-tabs mt-5" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Login </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Register</button>
                                </li>
                            </ul>
                        </div>



                        <div class="tab-content" id="myTabContent">

                            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="1">

                                <div className='login-content'>
                                    <h3> Have you registered yet?</h3>
                                    <p>Sign in to your personal space</p>

                                    <form onSubmit={SendData}>
                                        <div class="mb-3">

                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' onChange={(event) => setEmail(event.target.value)} />

                                        </div>
                                        <div class="mb-3">

                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
                                        </div>


                                       
                                        <button type="submit" class="btn">Login</button>
                                    </form>

                                    <Link to="/forgot-password" className='' > Forgot password?</Link>

                                    <p>or login with media account</p>

                                    <div className='loginpage-social'>
                                        <div>
                                            <Icon icon="devicon:facebook" width="36" height="36" />
                                            <span>facebook</span>
                                        </div>

                                        <div>
                                            <Icon icon="devicon:twitter" width="36" height="36" />
                                            <span>Twitter</span>
                                        </div>

                                        <div>
                                            <Icon icon="devicon:google" width="36" height="36" />
                                            <span>Google</span>
                                        </div>
                                    </div>

                                    <div className='mt-4'>
                                        <p>By logging in, you accept the terms, conditions of use and privacy policy of the social network. For information on the use of your data on this site, please see our PRIVACY POLICY</p>
                                    </div>

                                    <div className='loginmembershipcard'>
                                        <h5>  Do you have a platinum membership card? </h5>
                                        <p>  If you already have a platinum membership loyalty card, registration will be quick and easy, just enter the code and pin you find on your card </p>

                                        <button className='btn mt-2 mb-2 w-50
                                    '> Sign In with the Card</button>
                                    </div>
                                </div>



                            </div>


                            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="1">





                                <div className='register-content'>
                                    <h3>Are you not registered? </h3>
                                    <p>Only a few clicks are left to receive all of the loyalty program benefits!</p>

                                    <form onSubmit={CollectData}>
                                        <div class="mb-3">

                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' onChange={(event) => setEmail(event.target.value)} />

                                        </div>
                                        <div class="mb-3">

                                            <input type="name" class="form-control" id="exampleInputPassword1" placeholder='Name' onChange={(event) => setName(event.target.value)} />
                                        </div>

                                        <div class="mb-3">

                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder=' Password' onChange={(event) => setPassword(event.target.value)} />
                                        </div>
                                        {/* <div class="mb-3 form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                        </div> */}
                                        <button type="submit" class="btn">Register</button>
                                    </form>

                                    {/* <Link to="/forgot-password" className='' > Forgot password?</Link> */}

                                    <p>or register with media account</p>

                                    <div className='loginpage-social'>
                                        <div>
                                            <Icon icon="devicon:facebook" width="36" height="36" />
                                            <span>facebook</span>
                                        </div>

                                        <div>
                                            <Icon icon="devicon:twitter" width="36" height="36" />
                                            <span>Twitter</span>
                                        </div>

                                        <div>
                                            <Icon icon="devicon:google" width="36" height="36" />
                                            <span>Google</span>
                                        </div>
                                    </div>

                                    <div className='mt-4'>
                                        <p>By Registering, you accept the terms, conditions of use and privacy policy of the social network. For information on the use of your data on this site, please see our PRIVACY POLICY</p>
                                    </div>

                                    <div className='loginmembershipcard'>
                                        <h5>  Do you have a platinum membership card? </h5>
                                        <p>  If you already have a platinum membership loyalty card, registration will be quick and easy, just enter the code and pin you find on your card </p>

                                        <button className='btn mt-2 mb-2 w-50
                                    '> Sign up with the Card</button>
                                    </div>
                                </div>


                            </div>


                        </div>



                    </div>



                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Login
