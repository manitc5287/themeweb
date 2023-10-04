import React from 'react'
import Header from '../../../../Component/Header/Header'
import Footer from '../../../../Component/Footer/Footer'
import model from "../../../../assets/women/Gift/model.jpg";
import gifts from "../../../../assets/women/Gift/Gifts.jpg";
import customize from "../../../../assets/women/Gift/customize.jpg";
import "./gift.css";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Gifts = () => {
    return (
        <>
            <Header />
            <div className='Gifts'>
                <section>
                    <div className='container'>
                        <div className='row text-center mb-4'>
                            <h3>Gifts</h3>
                            <small>Get inspired and find the perfect gift</small>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='container'>
                        <div className='row  pb-4'>
                            <div className='col-lg-4 text-center'>
                                <div className='gift-product-div'>
                                    <img src={model} className='img-fluid'></img>
                                    <Link to="/new-arrivals">Newly arrived</Link>
                                </div>
                            </div>
                            <div className='col-lg-4 text-center'>
                                <div className='gift-product-div'>
                                    <img src={gifts} className='img-fluid'></img>
                                    <Link to="/customized">Customized</Link>
                                </div>
                            </div>

                            <div className='col-lg-4 text-center'>
                                <div className='gift-product-div'>
                                    <img src={customize} className='img-fluid'></img>
                                    <Link to="/customized">Gift by Budget</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Gifts
