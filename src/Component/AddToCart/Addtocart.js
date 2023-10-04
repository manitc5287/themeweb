import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Icon } from '@iconify/react';
import "./addtocart.css";
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { Link } from 'react-router-dom';
import { addItemtowishlist } from '../../store/wishlistSlice';

const Addtocart = (props) => {

    const [clicked, setClicked] = useState(false)
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {

        setClicked(true);
        for (let i = 0; i < quantity; i++) {
            dispatch(addItem(item));
        }
    };

    const handleAddToWishlist = (item) => {
        setChecked(true)
        for (let i = 0; i < quantity2; i++) {
            dispatch(addItemtowishlist(item));
        }
    };


    const [size, setSize] = useState("S");


    const cartData = {
        title: props.title,
        _id: props._id,
        sale_price: props.sale_price,
        price: props.price,
        color: props.color,
        size: size,
        image: props.image

    }

    const data = {
        title: props.title,
        _id: props._id,
        sale_price: props.sale_price,
        price: props.price,
        color: props.color,
        size: size,
        image: props.image

    }


    const [products, setProducts] = useState([]);

    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1)
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const [open2, setOpen2] = useState(false);
    const [quantity2, setQuantity2] = useState(1)
    const onOpenModal2 = () => setOpen2(true);
    const onCloseModal2 = () => setOpen2(false);
    const image = props.image;


    // 

    return (
        <div className='addtocartpopup'>
            <div className='slider-cart'>
                {
                    checked ? <Icon icon="subway:tick" color="black" width="24" height="24" />
                        : <Icon icon="mdi:heart-outline" color="black" width="24" height="24" onClick={onOpenModal2} />
                }

                <Icon className='' color="black" width="24" height="24" icon="mdi:shopping-outline" onClick={onOpenModal} />
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <div className='row ' >
                    <div className='col-md-6'>
                        <div className='addtocartimage'>
                            <img src={image} className='img-fluid' />
                        </div>
                    </div>

                    <div className='col-md-6 mt-3'>
                        <div className='add-to-cart-details'>
                            <h6>Product - <span>{props.title}</span></h6>
                            <p>Item Id - <span>{props._id}</span></p>
                            <p>Orignal Price - <span>{props.sale_price}</span></p>
                            <p>Discounted Price - <span>{props.price}</span></p>
                            <p>Available Colors - <span>{props.color} {props.color2}</span></p>
                            <div class="quantity">
                                <p>Quantity</p>
                                <button class="minus" aria-label="Decrease" onClick={() => { setQuantity(quantity <= 0 ? quantity : quantity - 1) }} >-</button>
                                <>{quantity}</>
                                <button class="plus" aria-label="Increase" onClick={() => { setQuantity(quantity >= 10 ? quantity : quantity + 1) }}>+</button>
                            </div>

                            <form action="/action_page.php" className='wishlist_popup_form'>
                                <label for="sizes"> <p>Choose a size: </p></label>
                                <select id="sizes" onChange={(event) => setSize(event.target.value)} name="cars" className='wishlist_popup_select'>
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                </select>
                            </form>

                            {
                                clicked == true ?
                                    <button className='btn btn-warning mt-3' >Added to Cart</button>
                                    :
                                    <button className='btn btn-warning mt-3' onClick={() => handleAddToCart(cartData)}>Add to Cart</button>
                            }
                            <button className='btn btn-warning mx-1 mt-3'><Link to="/cart">View Cart</Link></button>
                        </div>
                    </div>
                </div>
            </Modal>


            <Modal open={open2} onClose={onCloseModal2} center>
                <div className='row ' >
                    <div className='col-md-6'>
                        <div className='addtocartimage'>
                            <img src={image} className='img-fluid' />
                        </div>
                    </div>

                    <div className='col-md-6 mt-5'>
                        <div className='add-to-cart-details'>
                            <h6>Product - <span>{props.title}</span></h6>
                            <p>Item Id - <span>{props._id}</span></p>
                            <p>Orignal Price - <span>{props.sale_price}</span></p>
                            <p>Discounted Price - <span>{props.price}</span></p>
                            <p>Available Colors - <span>{props.color} {props.color2}</span></p>
                            {/* <div class="quantity">
                                <p>Quantity</p>
                                <button class="minus" aria-label="Decrease" onClick={() => { setQuantity2(quantity2 <= 0 ? quantity2 : quantity2 - 1) }} >-</button>
                                <>{quantity2}</>
                                <button class="plus" aria-label="Increase" onClick={() => { setQuantity2(quantity2 >= 10 ? quantity2 : quantity2 + 1) }}>+</button>
                            </div> */}


                            <form action="/action_page.php" className='wishlist_popup_form'>
                                <label for="sizes"> <p>Choose a size: </p></label>
                                <select id="sizes" onChange={(event) => setSize(event.target.value)} name="cars" className='wishlist_popup_select'>
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                </select>
                            </form>

                            {
                                clicked == true ?
                                    <button className='btn btn-warning mt-3' >Added to Wishlist</button>
                                    :
                                    <button className='btn btn-warning mt-3' onClick={async () => await handleAddToWishlist(data)}>Add to Wishlist</button>
                            }
                            <button className='btn btn-warning mx-1 mt-3'><Link to="/wishlist">View Wishlist</Link></button>
                        </div>
                    </div>
                </div>
            </Modal>



        </div>
    )
}

export default Addtocart
