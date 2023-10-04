import React, { useState } from 'react'
import image1 from "../../assets/women/Product/Lin11.jpg";
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { removeItemfromwishlist } from '../../store/wishlistSlice';
const WishlistCard = (props) => {

    const wholeitem = props.item;
    const [size, setSize] = useState(props.size)

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addItem(item));
        dispatch(removeItemfromwishlist(item._id));
    };


    const removeFromWishlist = (item) => {
        dispatch(removeItemfromwishlist(item._id));
    }


    const data = {
        title: wholeitem.title,
        _id: wholeitem._id,
        sale_price: wholeitem.sale_price,
        price: wholeitem.price,
        color: wholeitem.color,
        size: size,
        image: wholeitem.image

    }


    return (
        <div className='col-lg-6 my-3'>
            <div>
                <div className='wishlist_card'>
                    <Icon icon="akar-icons:cross" width="24" height="36" onClick={() => removeFromWishlist(wholeitem)} />
                    <img src={props.image} className='img-fluid'></img>
                    <div className='wishlist_card_content'>
                        <small>Item Id: {props._id}</small>
                        <p>{props.title}</p>
                        <span>Price: ${props.price}</span>
                        <span>Color: {props.color}</span>
                        <span>Size: {size}</span>
                    </div>
                </div>

            </div>
            <table className='wishlist_card_grid'>

                <tr>
                    <td> <select name="cars" onChange={(event) => setSize(event.target.value)} id="size">
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                    </td>
                    <td className='add-btn'>
                        <button className='btn' onClick={() => handleAddToCart(data)}> Move to Cart </button>
                    </td>
                </tr>
            </table>

        </div>
    )
}

export default WishlistCard
