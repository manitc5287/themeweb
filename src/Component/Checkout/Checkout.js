import React, { useState , useRef } from 'react'
import Logo from "../../assets/women/arrivals/Layer1.png"
import "./checkout.css";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const Checkout = () => {

    const cartItems = localStorage.getItem('cartItems');
    let cartTotal = localStorage.getItem('totalAmount');

    cartTotal = parseInt(cartTotal);


    const [selectedValue, setSelectedValue] = useState(null); // Default value for Standard

    const handleRadioChange = (event) => {
        const newValue = parseInt(event.target.value); // Parse the value to an integer
        setSelectedValue(newValue);
    };


    const currentDate = new Date();
    const sevenDaysAhead = new Date(currentDate);
    sevenDaysAhead.setDate(currentDate.getDate() + 7);

    const threeDaysAhead = new Date(currentDate);
    threeDaysAhead.setDate(currentDate.getDate() + 3);

    // Get the day of the week for each date
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
    const threeDaysAheadDayOfWeek = daysOfWeek[threeDaysAhead.getDay()];
    const sevenDaysAheadDayOfWeek = daysOfWeek[sevenDaysAhead.getDay()];

    const formattedCurrentDate = currentDate.toISOString().split('T')[0];
    const formattedSevenDaysAhead = sevenDaysAhead.toISOString().split('T')[0];
    const formattedThreeDaysAhead = threeDaysAhead.toISOString().split('T')[0];

    console.log(`Current Date: ${formattedCurrentDate} (${currentDayOfWeek})`);
    console.log(`Three Days Ahead: ${formattedThreeDaysAhead} (${threeDaysAheadDayOfWeek})`);
    console.log(`Seven Days Ahead: ${formattedSevenDaysAhead} (${sevenDaysAheadDayOfWeek})`);


    const [total, setTotal] = useState(0);
    const SalesTax = 18;

    const targetElementRef = useRef(null);

    const scrollToTarget = () => {
      if (targetElementRef.current) {
        targetElementRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };


    return (
        <div>
            <section className='checkout_header'>

                <div className='container'>
                    <Link to="/cart"> <Icon icon="ic:twotone-arrow-back" height="24" color="black" /></Link>
                    <div className='row'>
                        <img src={Logo} alt='img-fluid'></img>

                    </div>
                </div>
            </section>


            <section className='checkout_main'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-8'>
                            <p>Hello, Manit!</p>

                            <div class="container">
                                <div class="plans">
                                    <div class="title">Choose a Shipping plan</div>
                                    <label class="plan basic-plan" for="basic">
                                        <input
                                            type="radio"
                                            name="plan"
                                            id="basic"
                                            value="9"
                                            checked={selectedValue === 9}
                                            onChange={handleRadioChange}
                                        />
                                        <div class="plan-content">
                                            <div class="plan-details">
                                                <div class="grid-x display-name radio-label no-margin dark">
                                                    <div class="cell strong small-10 estimated-delivery">{currentDayOfWeek}, {formattedCurrentDate}-{sevenDaysAheadDayOfWeek}, {formattedSevenDaysAhead}</div>
                                                    <div class="cell font-normal small-10">
                                                        <span class="is-present">Standard</span>
                                                        <span class="shipping-cost">
                                                            $9.00
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </label>

                                    <label class="plan complete-plan" for="complete">
                                        <input
                                            type="radio"
                                            name="plan"
                                            id="complete"
                                            value="27"
                                            checked={selectedValue === 27}
                                            onChange={handleRadioChange}
                                        />
                                        <div class="plan-content">
                                            <div class="plan-details">
                                                <div class="grid-x display-name radio-label no-margin dark">
                                                    <div class="cell strong small-10 estimated-delivery">{currentDayOfWeek}, {formattedCurrentDate}-{threeDaysAheadDayOfWeek}, {formattedThreeDaysAhead}</div>
                                                    <div class="cell font-normal small-10">
                                                        <span class="is-present">Express</span>
                                                        <span class="shipping-cost">
                                                            $27.00
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </label>

                                    <div class="title">Store Pickup</div>

                                    <label className="plan store-pickup" htmlFor="complete1">
                                        <input
                                            type="radio"
                                            name="plan"
                                            id="complete1"
                                            value="0"
                                            checked={selectedValue === 0}
                                            onChange={handleRadioChange}
                                        />
                                        <div class="plan-content">
                                            <div class="plan-details">
                                                <div class="grid-x display-name radio-label no-margin dark">
                                                    <div class="cell strong small-10 estimated-delivery">{currentDayOfWeek}, {formattedCurrentDate}-{sevenDaysAheadDayOfWeek}, {formattedSevenDaysAhead}</div>
                                                    <div class="cell font-normal small-10">
                                                        <span class="is-present">Store Pickup</span>
                                                        <span class="shipping-cost">
                                                            Free
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                    <button disabled={selectedValue ==null? true : false} className='button_checkout' onClick={()=>scrollToTarget()} >Continue</button>
                                </div>


                                <div class="containneer" id ="containneer" ref={targetElementRef}>
                                    <span className='title'>Shipping</span>
                                    <p>Please enter your shipping details.</p>
                                    <hr />
                                    <div class="form">
                                        <div class="fields fields--2">
                                            <label class="field">
                                                <span class="field__label" for="firstname">First name</span>
                                                <input class="field__input" type="text" id="firstname" value="John" />
                                            </label>
                                            <label class="field">
                                                <span class="field__label" for="lastname">Last name</span>
                                                <input class="field__input" type="text" id="lastname" value="Doe" />
                                            </label>
                                        </div>
                                        <label class="field">
                                            <span class="field__label" for="address">Address</span>
                                            <input class="field__input" type="text" id="address" />
                                        </label>
                                        <label class="field">
                                            <span class="field__label" for="country">Country</span>
                                            <select class="field__input" id="country">
                                                <option value=""></option>
                                                <option value="unitedstates">United States</option>
                                            </select>
                                        </label>
                                        <div class="fields fields--3">
                                            <label class="field">
                                                <span class="field__label" for="zipcode">Zip code</span>
                                                <input class="field__input" type="text" id="zipcode" />
                                            </label>
                                            <label class="field">
                                                <span class="field__label" for="city">City</span>
                                                <input class="field__input" type="text" id="city" />
                                            </label>
                                            <label class="field">
                                                <span class="field__label" for="state">State</span>
                                                <select class="field__input" id="state">
                                                    <option value=""></option>
                                                </select>
                                            </label>
                                        </div>
                                    </div>
                                    <hr />
                                    <button className='button_checkout'>Continue</button>
                                </div>
                            </div>
                        </div>



                        <div className='col-lg-4'>
                            <div className='checkout_total'>
                            <h4>Order Total</h4>
                            <div className='cart_billing'>
                                <div>
                                    <p>Item total</p>
                                    <span>${cartTotal}.00</span>
                                </div>
                                <div>
                                    <p>Sales Tax</p>
                                    <span>${SalesTax}.00</span>
                                </div>
                                <div>
                                    <p>Standard shipping total</p>
                                    <span>${selectedValue}.00</span>
                                </div>
                            </div>
                            <div className='cart-total'>
                                <div>
                                    <p>Order Total :-</p>
                                    <span>${cartTotal + selectedValue + SalesTax}.00</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Checkout
