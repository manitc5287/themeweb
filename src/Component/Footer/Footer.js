import React from 'react'
import { Link } from 'react-router-dom';
import "./footer.css";
import Logo from "../../assets/women/arrivals/Layer1.png"
const Footer = () => {
  return (
    <div>
    <footer class="footer-distributed ">

<div class="footer-left">

 <img  src={Logo} alt="" className='img-fluid w-50' />

  <p class="footer-links">
    <a href="#" class="link-1">Home</a>

    <a href="#">Seller</a>

    <a href="#">Pricing</a>

    <a href="#">About</a>

    <a href="#">pages</a>

    <a href="#">Contact</a>
  </p>

  <p class="footer-company-name">Sell Cart Pvt Ltd © 2015</p>
</div>

<div class="footer-center">

  <div>
    <i class="fa fa-map-marker"></i>
    <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>+1.555.555.5555</p>
  </div>

  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">support@company.com</a></p>
  </div>

</div>

<div class="footer-right">

  <p style={{color: "white"}} class="footer-company-about">
    <span>About the company</span>
    E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet.
  </p>

  <div class="footer-icons">

    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-github"></i></a>

  </div>

</div>

</footer>

    </div>

  )
}

export default Footer