import React from 'react'
import Header from '../../../Component/Header/Header'
import Footer from '../../../Component/Footer/Footer'
import "./singleproduct.css";
import { Icon } from '@iconify/react';
import Image1 from '../../../assets/women/Product/Lin1.jpg';
import Image2 from '../../../assets/women/Product/Lin2.jpg'
import { Link } from 'react-router-dom';
import Newsletter from "../../../Component/Newsletter/Newsletter"
const SingleProduct = () => {

    const data = localStorage.getItem('singleProduct');
    console.log(localStorage.getItem('singleProduct'), "data")
    
    return (
        <div>
            <Header />
            <section className='singleproduct'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div>
                                <img src={data} className='img-fluid'></img>
                              

                             
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div>
                                <img src={Image2} className='img-fluid'></img>
                                <img src={Image2} className='img-fluid'></img>
                                <img src={Image1} className='img-fluid'></img>
                                <img src={Image2} className='img-fluid'></img>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='singleproduct_content'>
                                <section>
                                    <h4>Golden Goddess Bra Top $79.00</h4>

                                </section>
                                <section>
                                    <p> Available Color's</p>

                                    <small>Color Green - 333j - Green Moss/Oro</small>
                                    <span> .</span>
                                </section>

                                <section className='singleproduct-details'>
                                    <select id="cars" className='mt-3' name="cars">
                                        <option value="Select Size" disabled>Select Size</option>
                                        <option value="saab">S</option>
                                        <option value="fiat">M</option>
                                        <option value="audi">L</option>
                                    </select>

                                    <div className='d-flex mt-3' style={{ gap: "10px" }}>
                                        <div className=''>
                                            <Icon icon="solar:hanger-bold-duotone" width="24" height="24" />
                                            <small>Virtual Fitting Room</small>
                                        </div>
                                        <div>
                                            <Icon icon="icon-park:scale-one" width="24" height="24" rotate={1} />
                                            <small>Size Guide</small>
                                        </div>
                                    </div>

                                    <div className='singleproduct_buttons mt-3'>
                                        <button>Add to Cart</button>
                                        <button> <Icon icon="ph:heart-thin" width="24" height="24" /></button>
                                    </div>

                                    <button className='send_as_a_gift_button'> Send As A Gift</button>

                                    <div className='singleproduct_icons'>
                                        <Icon icon="ic:baseline-star" color="black" width="18" height="18" />
                                        <Icon icon="ic:baseline-star" color="black" width="18" height="18" />
                                        <Icon icon="ic:baseline-star" color="black" width="18" height="18" />
                                        <Icon icon="ic:baseline-star" color="black" width="18" height="18" />
                                        <Icon icon="ic:baseline-star" color="black" width="18" height="18" />

                                        <small> 3 Reviews</small>
                                    </div>
                                </section>

                                <div className='singleproduct-description'>
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item ">
                                            <h2 class="accordion-header" id="headingOne">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Description
                                                </button>
                                            </h2>
                                            <div id="" class=" " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias neque architecto sed aliquam sint, non esse sunt accusamus et asperiores. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingTwo">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Shipping
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <small>Standard</small><br />
                                                    <p> Take's 4-6 business days.</p>

                                                    <small>Premium</small><br />
                                                    <p> Delivery within 2-3 days. ($25.00)</p><Link to=""> <p>Opt for premium</p></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingThree">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Returns
                                                </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <p>
                                                        <ul>
                                                            <li>Return via carrier always free of charge.</li>
                                                            <li>Return in-store always free of charge.</li>
                                                            <li>Return at a pick-up point</li>
                                                        </ul>
                                                    </p>
                                                    <p>
                                                        Remember that you have up to 30 days from delivery of the order to change your mind and request your return online.

                                                        For more info, consult our Legal Area - Terms of Sale under Article 8 of the General Notes.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingThree">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                                    Composition and care
                                                </button>
                                            </h2>
                                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                
                                                    <ul class="nav nav-tabs singlepagenavtabs" id="myTab" role="tablist">
                                                        <li class="nav-item" role="presentation">
                                                        <Icon class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"  icon="fa-solid:hands-wash" color="black" width="19" height="19" />
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                        <Icon class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" icon="teenyicons:bin-solid" color="black" width="19" height="19" />
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                        <Icon icon="tabler:wash-tumble-off" color="black" width="19" height="19" class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" />
                
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                        <Icon  class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" icon="material-symbols:dry-sharp" color="black" width="19" height="19" />
                                                           
                                                        </li>
                                                    </ul>
                                                    <div class="tab-content" id="myTabContent">
                                                        <div class="tab-pane fade " id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                                            <p>It's a delicate piece of cloth, wash from hand</p>
                                                            </div>
                                                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                                      <p>  Do not bleach</p>

                                                            </div>
                                                        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                                                         <p>Do not tumble dry</p>
                                                            </div>
                                                        <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                                                          <p>Line dry</p>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingThree">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                                    Traceability
                                                </button>
                                            </h2>
                                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <p>Did you know that 94% of the items are produced in our factories? We have always been committed to a deep control of the production chain, respecting the people who are part of it.

                                                    </p>
                                                    <p> Made in Lorem Ipsum: OMEGA, SRI LANKA</p>
                                                    <p> Logistics centre: VALLESE, ITALY</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingThree">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                                    Product availability in store
                                                </button>
                                            </h2>
                                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </div>
                                        </div> */}



                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
           <Newsletter />
            <Footer />
        </div>
    )
}

export default SingleProduct
