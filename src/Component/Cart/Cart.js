import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import './cart.css';
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../../store/cartSlice';
import { addItemtowishlist } from '../../store/wishlistSlice';

const Cart = () => {

    // **********************Delivery Date***************************

    const currentDate = new Date();
    const sevenDaysAhead = new Date(currentDate);
    sevenDaysAhead.setDate(currentDate.getDate() + 7);
    const formattedCurrentDate = currentDate.toISOString().split('T')[0];
    const formattedSevenDaysAhead = sevenDaysAhead.toISOString().split('T')[0];
  


    const shippingCharges = 9;
    const SalesTax = 18;

    const [total, setTotal] = useState(0);

    const [value, setValue] = useState(1);

    const increment = () => {
        setValue(prevValue => prevValue + 1);
    };

    const decrement = () => {
        if (value > 0) {
            setValue(prevValue => prevValue - 1);
        }
    };

    const cartItems = useSelector(state => state.cart);
    const wishItems = useSelector(state => state.wishlist);

    console.log(cartItems);
    const dispatch = useDispatch();

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const addToWish = (item) => {
        dispatch(addItemtowishlist(item));
        dispatch(removeItem(item._id));
    };


    const Checkout = () => {
        localStorage.setItem('cartItems', cartItems);
        localStorage.setItem('totalAmount', total)
    }


    useEffect(() => {
        let totall = 0;
        for (let i = 0; i < cartItems.length; i++) {
            totall = totall + parseInt(cartItems[i].sale_price);
        }

        setTotal(totall)
    })

    return (
        <div>
            <Header />
            <div className='cart'>
                <div className='container'>
                    <div className='row mt-5'>
                        <h4> Your shopping bag <span> {cartItems ? cartItems.length : 0} (items)</span></h4>
                    </div>

                    <div className='row'>
                        <div className='col-lg-8 mt-2 '>
                            <div className='cart_promotion_offer'>
                                <h6> Promotional Offer</h6>
                                <p>Register to the My Intimissimi loyalty program to get always free shipping.</p>
                                <Link to="/login"> Login or Register</Link>
                            </div>

                            <div className='mt-3'>
                                <p>Expected delivery or pickup:
                                    <b>  {formattedCurrentDate} { } - {formattedSevenDaysAhead} { } </b> <br />
                                    All shipping methods</p>
                            </div>



                            {
                                <ul>
                                    {
                                        cartItems.length !== 0 ?
                                            cartItems.map(item => (
                                                <div key={item.id} className='row product_div'>
                                                    <div className='col-lg-2'>
                                                        <img src={item.image} className='img-fluid'></img>
                                                    </div>

                                                    <div className='col-lg-10'>
                                                        <small>Item Id: {item._id}</small>
                                                        <small className='fw-bold'>{item.title}</small>
                                                        <small >Unit price: <b> ${item.sale_price}  </b></small>
                                                        <small>Size: {item.size}</small>
                                                        <small>Color: {item.color}</small>


                                                        <div className='product_div_icons'>
                                                            <div onClick={() => addToWish(item)}>
                                                                <Icon icon="ri:heart-add-line" width="18" height="18" />
                                                                <p>Add To Wishlist</p>
                                                            </div>

                                                            {/* <div>
                                                                <Icon icon="ph:pencil-light" width="18" height="18" />
                                                                <p>Change</p>
                                                            </div> */}

                                                            <div>
                                                                <Icon icon="uil:multiply" width="18" height="18" />
                                                                <p onClick={() => handleRemoveItem(item._id)}>Delete</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )) :
                                            <h4 className='text-center mt-5'> Your Cart Is Empty <br /> Please shop more to checkout...</h4>
                                    }

                                </ul>
                            }

                        </div>


                        <div className='col-lg-4'>
                            <h4>Order Total</h4>


                            <div className='promotion_refferal'>

                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Do you have a promotional code?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <Link>Been Referred by a friend ?</Link>
                                                <input type='text' placeholder='Enter promotional code'></input> <br />
                                                <button>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='cart_billing'>


                                <div>
                                    <p>Item total</p>
                                    <span>${total}.00</span>
                                </div>


                                <div>
                                    <p>Sales Tax</p>
                                    <span>${SalesTax}.00</span>
                                </div>

                                <div>
                                    <p>Standard shipping total</p>
                                    <span>${shippingCharges}.00</span>
                                </div>

                                <div>
                                    <span>You need $57.00 to obtain Free Shipping over $75</span>
                                </div>

                            </div>

                            <div className='cart-total'>
                                <div>
                                    <p>Order Total :-</p>
                                    <span>${total + shippingCharges + SalesTax}.00</span>
                                </div>

                                <span>or 4 payments of ${(total + shippingCharges + SalesTax) / 4} with <strong> AfterPay </strong><Icon icon="ic:outline-watch-later" width="18" height="18" /></span> <br />
                                <Link to="/checkout" ><button className='btn' onClick={() => Checkout()}> Continue</button> </Link>
                            </div>

                            <div className='cart_extra_info'>
                                <div>
                                    <Icon icon="fluent:call-12-regular" width="24" height="24" />
                                    <p>
                                        <u>CALL</u> <br />
                                        Toll-free number +1(855)564-2408 active from Monday - Saturday from 1 AM until 5 PM EST.
                                    </p>

                                </div>

                                <div>
                                    <Icon icon="gridicons:shipping" width="36" height="36" />
                                    <p>
                                        <u>
                                            FREE SHIPPING AND RETURNS</u> <br />
                                        Standard shipping costs and returns are always free for customers registered to the My Intimissimi loyalty program. In-store returns are free for all customers.
                                    </p>
                                </div>
                                <div>
                                    <Icon icon="gala:secure" width="36" height="36" />
                                    <p>
                                        <u>SECURE PAYMENT</u> <br />
                                        You can use different payment methods to make purchases on our site, discover them all. The payment you choose is completely secure.
                                    </p>
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

export default Cart
