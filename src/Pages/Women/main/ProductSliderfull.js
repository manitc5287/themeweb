import React, {useEffect, useState} from 'react'
import Slider from "react-slick";
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../../store/cartSlice';
import Addtocart from '../../../Component/AddToCart/Addtocart';
import { Link } from 'react-router-dom';

const ProductSliderfull = () => {

    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
      dispatch(addItem(item));
    };
  

    var settings = {
     
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        className:"slick-product-slider mainpage_Slider",

        nextArrow: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m7.25 17l7.5-5l-7.5-5a.901.901 0 1 1 1-1.5l8.502 5.668a1 1 0 0 1 0 1.664L8.25 18.5a.901.901 0 1 1-1-1.5z" /></svg>,
        prevArrow: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.5 17.5L9.25 12l8.25-5.5l-1-1.5L6 12l10.5 7z" /></svg>,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const [products, setProducts] = useState([]);

    useEffect(() => {
      getProducts();
    }, []);
  
    const getProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };


    return (
        <div className='container-fluid mt-5'>
            <h2 className='text-center mb-3 mt-5'> You May also Like</h2>
            
            <Slider {...settings}>
            {products
              .map((item) => (
                <div key={item.id}> 
                  <Link to = "/single-product" onClick={localStorage.setItem('singleProduct' , item)} style={{textDecoration:"none" , color:"black"}}>
                  <div className="product-slide">
                    <img src={item.image} alt="" className="" />
                    <p>{item.title}</p>
                    <div className="product_Slider_price " style={{visibility:"hidden"}}>
                      <s>
                        <small className="price">${item.price}</small>
                      </s>
                      <small>${item.sale_price}</small>
                    </div>
                    <div className="product-slide-icons">
                      <Icon icon="mdi:heart-outline" color="white" width="24" height="24" />

                    </div>

                    <Addtocart image={item.image} title={item.title} sale_price={item.price} price={item.sale_price} color={item.color} _id={item._id} /> {/* Pass a function to onClick */}
                  </div>
                  </Link>
                </div>
              ))}
          </Slider>
           
        </div>
    )
}

export default ProductSliderfull
