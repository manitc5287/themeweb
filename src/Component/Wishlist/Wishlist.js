import React from 'react'
import "./wishlist.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import WishlistCard from './WishlistCard';
import Newsletter from '../Newsletter/Newsletter';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { clearWishlist } from '../../store/wishlistSlice';

const Wishlist = () => {

    const dispatch = useDispatch();


    const addAll = (wishItems) => {
        for (let i = 0; i < wishItems.length; i++) {
            dispatch(addItem(wishItems[i]));
            dispatch(clearWishlist());
        }
    }


    

    const wishItems = useSelector(state => state.wishlist);
    console.log(wishItems)

    return (
        <div>
            <Header />
            <div className='container'>
                <div className='row  my-5'>
                    <div className='wishlistmain'>
                        <h3> My WishList</h3>
                        <p> {wishItems.length} item(s)</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-4 wishheading'>
                        <div>
                            <p>Sign in to your account to view your wishlist from all your devices and update the products selected in your bag at any time. You can also ask for your favorite items from our stores simply by sharing your wishlist.</p>
                            <button className='btn' onClick={() => addAll(wishItems)}> Add All Items to Bag</button>
                        </div>


                    </div>
                    <div className='col-lg-8'>
                        <div className='row'>
                            {
                                wishItems.length !== 0 ? wishItems.map((items) => (
                                    <WishlistCard size={items.size} item={items} _id={items._id} title={items.title} price={items.sale_price} color={items.color} image={items.image} />
                                )) :

                                    <h4 className='text-center'>No Items In The wishlist</h4>
                            }
                        </div>
                    </div>

                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Wishlist
