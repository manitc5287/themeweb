import React from 'react'
import Slider from "react-slick";
import { Icon } from '@iconify/react';
import Addtocart from '../../../../Component/AddToCart/Addtocart';
const Collectionslider = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m7.25 17l7.5-5l-7.5-5a.901.901 0 1 1 1-1.5l8.502 5.668a1 1 0 0 1 0 1.664L8.25 18.5a.901.901 0 1 1-1-1.5z" /></svg>,
    prevArrow: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.5 17.5L9.25 12l8.25-5.5l-1-1.5L6 12l10.5 7z" /></svg>
  };

  const gridmenu = localStorage.getItem('collectiongrid')

  return (
    <div className='Collectionsproducts '>

      <Slider className={`${gridmenu === 'true' ? 'non-sliderrr' : 'sliderr'}`} {...settings}>
        <div className='Collections-product'>
          <img src={props.image1} className='img-fluid' ></img>

        </div>
        <div>
          <img src={props.image2} className='img-fluid' ></img>

        </div>
        <div>
          <img src={props.image3} className='img-fluid' ></img>

        </div>
      </Slider>

      <p>NEW!</p>
      <small>{props.title}</small> <br />

      <small> <s>${props.cutprice} </s> ${props.price}</small><br />
      <span>{props.color}</span>

      <Addtocart image={props.image1} title={props.title} price={props.price} sale_price={props.cutprice} color={props.color} _id={props._id}/>
    </div>
  );
}


export default Collectionslider




