import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import "./header.css";
import { Link } from 'react-router-dom';
import Logo from "../../assets/women/arrivals/Layer1.png"
import braimage from "../../assets/women/Header/bra.jpg"
import panty from "../../assets/women/Header/panty.jpg"
import Ling1 from "../../assets/women/Header/Ling1.jpg"
import Ling2 from "../../assets/women/Header/Ling2.jpg"
import knit from "../../assets/women/Header/knit.jpg"
import pajamap from "../../assets/women/Header/pajamap.jpg"
import pajamal from "../../assets/women/Header/pajamal.jpg"
import col1 from "../../assets/women/Header/col (1).jpg"
import col2 from "../../assets/women/Header/col (2).jpg"
import col3 from "../../assets/women/Header/col (3).jpg"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import OffCanvasMenu from './OffCanvasMenu ';

const Header = ({ toggleMenu }) => {
  const cartItems = useSelector(state => state.cart);
  const wishItems = useSelector(state => state.wishlist);
  const navigate = useNavigate("/")
  const currentUser = localStorage.getItem("currentUser");
  const name = currentUser;
  console.log(currentUser);
  const Logout = () => {
    localStorage.clear();
    alert("Logged Out")
    window.location.reload();
  }

  return (
    <div id="header">

      <div className='container mt-3 mb-3'>
        <div className='row d-flex justify-content-center align-items-center'>

          <div className='col-lg-2 col-4 '>
            <Link to="/">    <img src={Logo} className='img-fluid main-logo'></img></Link>
          </div>

          <div className='col-lg-7 col-12 order-lg-2 order-3'>
            <form className='header-form'>
              <div className='col-11'>
                <input type='text' placeholder='Search'></input>
              </div>

              <div className='col-1 '>
                <button><Icon icon="material-symbols:search" /></button>
              </div>
            </form>
          </div>

          <div className='col-lg-3 col-8 order-lg-3 order-2'>
            <div className='header-checkout-menu'>



              <div className='user_profile_relative'>
                <Icon className=' header_checkout_icon' icon="ri:user-fill" />
                <div className='user_profile_absolute'>
                  <ul>
                    <Link to="/login">

                      <li>
                        <div className="">
                          <small>
                            {name ? <>Hello, {JSON.parse(currentUser).name}{ }</> : <>No user,  Logged In </>}
                          </small>
                       
                          <small>
                            {
                              name ? <p className='mt-3' onClick={Logout}>Logout <Icon icon="bx:exit" width="24" height="24" /> </p> : <p></p>
                            }
                          </small>
                        </div>
                      </li>
                      <li className='loginlist'>
                        Login / Register
                        <Icon icon="ic:outline-greater-than" color="black" width="19" height="19" />
                      </li>
                    </Link>

                    <Link to="/">
                      <li>

                        <Icon icon="mingcute:profile-line" color="black" width="19" height="19" />  My Personal Space

                      </li>
                    </Link>

                    <Link to="/">
                      <li>
                        <Icon icon="iconamoon:profile-fill" color="black" width="19" height="19" />
                        Profile

                      </li>

                    </Link>

                    <Link to="/">
                      <li>
                        <Icon icon="material-symbols:order-approve-outline" color="black" width="19" height="19" />
                        My Orders

                      </li>
                    </Link>

                    <Link to="/">
                      <li>
                        <Icon icon="icomoon-free:address-book" color="black" width="19" height="19" />
                        My Addresses

                      </li>
                    </Link>

                    <Link to="/">
                      <li>
                        <Icon icon="material-symbols:add-card-sharp" color="black" width="19" height="19" />
                        Save a Card

                      </li>
                    </Link>

                    <Link to="/wishlist">
                      <li>
                        <Icon icon="tabler:jewish-star-filled" color="black" width="19" height="19" />
                        My Wish List
                      </li>
                    </Link>

                  </ul>
                </div>
              </div>



              <Link className='header_cart header_icon_menu' to="/cart"> <p>{cartItems.length}</p> <Icon icon="mdi:cart" className='header_checkout_icon' /></Link>

              <Link className=" header_cart header_icon_menu" to="/wishlist">  <p>{wishItems.length}</p> <Icon icon="mdi:heart" className='header_checkout_icon' /></Link>

              <OffCanvasMenu />
            </div>
          </div>
        </div>
      </div>

      <div className='container'>


      </div>




      <div className='megamenu container'>
        <div className='mega-menu1'>
          <Link to="/sale">Sale</Link>
        </div>
        <div id='mega-menu1' data-toggle="collapse" data-target="#mega-submenu1" className='mega-menu1'>
          <Link to="/category-bras">Bra</Link>

          <div className=' mega-submenu1'>
            <div className='row px-5'>

              <div className='col-md-3'>
                <p> Type</p>
                <br />
                <Link to="/women/Bra/Balconette">Balconette</Link>

                <Link to="/women/Bra/Triangle">Triangle</Link>

                <Link to="/women/Bra/Push Up">Push-Up</Link>

                <Link to="/women/Bra/Super Push Up">Super-Push-Up</Link>

                <Link to="/women/Bra/Bralette">Bralette</Link>

                <Link to="/women/Bra/Bandeau">Bandeau</Link>

                <Link to="/women/Bra/Strapless">Strapless</Link>

                <Link to="/women/Bra/Wireless">Wireless</Link>

                <Link to="/women/Bra/Underwire">Underwire</Link>

                <Link to="/women/Bra/Padded">Padded</Link>

                <Link to="/women/Bra/Non Padded">Non-Padded</Link>
              </div>

              <div className='col-md-3'>

                <p> NAVIGATE CUPS</p>
                <br />
                <Link to="/women/Bra/B Cup">B Cup</Link>

                <Link to="/women/Bra/C Cup">C Cup</Link>

                <Link to="/women/Bra/D Cup">D Cup</Link>

                <Link to="/women/Bra/DD Cup">DD Cup</Link>

                <Link to="/women/Bra/DDD Cup">DDD Cup</Link>
              </div>

              <div className='col-md-3'>
                <p> NAVIGATE CUPS</p>
                <br />

                <Link to="/women/Bra/Mesh">Mesh</Link>

                <Link to="/women/Bra/Invisible">Invisible</Link>

                <Link to="/women/Bra/Basic">Basic</Link>

                <Link to="/women/Bra/Bridal">Bridal</Link>

                <Link to="/women/Bra/Sport In Action">Sport In Action</Link>

                <Link to="/women/Bra/Customize">Customize</Link>

              </div>
              <div className='col-md-1'></div>

              <div className='col-md-2'>
                <img src={panty} className='img-fluid'></img>
              </div>

            </div>
          </div>

        </div>

        <div className='mega-menu2'>
          <Link to="/category-panties">Panties</Link>

          <div className=' mega-submenu2'>
            <div className='row px-5'>

              <div className='col-md-3'>
                <p> Type</p>
                <br />

                <Link to="/women/panties/Brazilian Cut">Brazilian Cut</Link>

                <Link to="/women/panties/Bikini Briefs">Bikini Briefs</Link>

                <Link to="/women/panties/Bodyshorts">Bodyshorts </Link>

                <Link to="/women/panties/Thongs">Thongs</Link>

                <Link to="/women/panties/G String">G-String</Link>

                <Link to="/women/panties/High Waisted Briefs">High Waisted Briefs</Link>
              </div>

              <div className='col-md-3'>

                <p> COLLECTIONS</p>
                <br />

                <Link to="/women/panties/Mesh">Mesh</Link>

                <Link to="/women/panties/Invisible">Invisible</Link>

                <Link to="/women/panties/Basic">Basic</Link>

                <Link to="/women/panties/Bridal">Bridal</Link>

                <Link to="/women/panties/Shaping"> Shaping</Link>

                <Link to="/women/panties/Customize">Customize</Link>
              </div>

              <div className='col-md-3'>

                <p> PROMO</p>
                <br />

                <Link to="/women/panties/brazilian-cut">Panties -3 for $35 </Link>

                <Link to="/women/panties/brazilian-cut">Panties -6 for $65</Link>



              </div>

              <div className='col-md-1'></div>

              <div className='col-md-2'>

                <img src={braimage} className='img-fluid'></img>
              </div>
            </div>
          </div>
        </div>



        <div className='mega-menu4'>
          <Link to="/category-lingerie">Lingerie</Link>
          <div className=' mega-submenu4'>
            <div className='row px-5'>

              <div className='col-md-3'>
                <p> TYPE</p>
                <br />

                <Link to="/women/lingerie/Slips & Babydolls">Slips & Babydolls</Link>



                <Link to="/women/lingerie/Corsets">Corsets</Link>

                <Link to="/women/lingerie/Bustiers">Bustiers</Link>

                <Link to="/women/lingerie/BodySuits">BodySuits</Link>

                <Link to="/women/lingerie/Garter Belts & Garter">Garter Belts & Garter's</Link>


              </div>

              <div className='col-md-3'>
                <p> COLLECTIONS</p>
                <br />

                <Link to="/women/lingerie/Bridal">Bridal</Link>

                <Link to="/women/lingerie/Basic">Basic</Link>

                <Link to="/women/lingerie/Shaping">Shaping</Link>

                <Link>Customize</Link>


              </div>

              <div className='col-md-4'>
                <img src={Ling1} className='img-fluid'></img>

              </div>

              <div className='col-md-2'>
                <img src={Ling2} className='img-fluid'></img>
              </div>
            </div>
          </div>
        </div>

        <div className='mega-menu5'>
          <Link to="/category-knitwear">Knitwear</Link>

          <div className=' mega-submenu5'>
            <div className='row px-5'>

              <div className='col-md-3'>
                <p> TYPE</p>
                <br />

                <Link to="/women/knitwear/Tank Tops">Tank Tops</Link>

                <Link to="/women/knitwear/Camisoles">Camisoles</Link>

                <Link to="/women/knitwear/Short Sleevs">Short Sleeve Tops</Link>

                <Link to="/women/knitwear/Shirts">Shirts</Link>

                <Link to="/women/knitwear/Long Sleevs"> Long Sleeve Tops</Link>

                <Link to="/women/knitwear/Cardigans-Jackets">Cardigans / Jackets</Link>

                <Link to="/women/knitwear/Bodysuits">Bodysuits</Link>

                <Link to="/women/knitwear/Leggings">Leggings</Link>

                <Link to="/women/knitwear/Pants">Pants</Link>
              </div>

              <div className='col-md-3'>

                <p> COLLECTIONS</p>
                <br />

                <Link to="/women/knitwear/Sports in Action">Sports in Action</Link>

                <Link to="/women/knitwear/Home wea">Home wear</Link>

                <Link to="/women/knitwear/Customize">Customize </Link>


              </div>

              <div className='col-md-3'>
                <p> Fabric</p>
                <br />


                <Link to="/women/knitwear/Cotton">Cotton</Link>

                <Link to="/women/knitwear/Wool and Silk">Wool and Silk</Link>

                <Link to="/women/knitwear/Microfiber">Microfiber</Link>

                <Link to="/women/knitwear/Modal">Modal</Link>

                <Link to="/women/knitwear/Silk">Silk </Link>

                <Link to="/women/knitwear/Ultralight With Cashmere">Ultralight With Cashmere </Link>

              </div>

              <div className='col-md-1'></div>

              <div className='col-md-2'>
                <img src={knit} className='img-fluid'></img>
              </div>
            </div>
          </div>
        </div>

        <div className='mega-menu6'>
          <Link to="/category-pajamas">Pajama's</Link>

          <div className=' mega-submenu6'>
            <div className='row px-5'>
              <div className='col-md-3'>

                <p> TYPE</p>
                <br />

                <Link to="/women/pajamas/Long Pajama">Long Pajama</Link>

                <Link to="/women/pajamas/Short Pajama">Short Pajama</Link>

                <Link to="/women/pajamas/Pajama Seprate"> Pajama Seprate</Link>

                <Link to="/women/pajamas/Night Dresses">Night Dresses</Link>

                <Link to="/women/pajamas/Kimonos">Kimonos</Link>
              </div>

              <div className='col-md-3'>
                <p> COLLECTIONS</p>
                <br />

                <Link to="/women/pajamas/Bridal"> Bridal</Link>

                <Link to="/women/pajamas/Silk">Silk</Link>

                <Link to="/women/pajamas/Customize">Customize </Link>
                <br />

                <p> ACCESSORIES</p>


                <Link to="/women/pajamas/Shirts">Nigth Wear ACCESSORIES / Slippers</Link>


              </div>

              <div className='col-md-4'>
                <img src={pajamal} className='img-fluid'></img>

              </div>

              <div className='col-md-2'>
                <img src={pajamap} className='img-fluid'></img>
              </div>
            </div>
          </div>
        </div>

        <div className='mega-menu7'>
          <Link to="/collections">Collections</Link>

          <div className=' mega-submenu7'>
            <div className='row px-5'>
              <div className='col-md-3'>
                <p> TYPES</p>
                <br />
                <Link to="/women/collection/Brandcare">#Brandcare</Link>
                <Link to="/women/collections/Bridal">Bridal </Link>
                <Link to="/women/collection/B Cup">B Cup</Link>
                <Link to="/women/collection/Sports in Action">Sports in Action</Link>
                <Link to="/women/collection/Shaping Underwear">Shaping Underwear</Link>
                <Link to="/women/collection/Customize">Customize</Link>
              </div>

              <div className='col-md-3'>

                <p> BESTSELLER</p>
                <br />

                <Link to="/women/collection/Picked by">Picked by</Link>
                <Link to="/women/collection/Cotton">Cotton</Link>
                <Link to="/women/collection/Microfiber">Microfiber</Link>
                <Link to="/women/collection/Silk">Silk </Link>
                <Link to="/women/collection/Ultralight With Cashmere">Ultralight With Cashmere </Link>
              </div>

              <div className='col-md-2'>
                <img src={col1} className='img-fluid'></img>
              </div>
              <div className='col-md-2'>
                <img src={col2} className='img-fluid'></img>
              </div>

              <div className='col-md-2'>
                <img src={col3} className='img-fluid'></img>
              </div>
            </div>
          </div>
        </div>

        <div className='mega-menu8'>
          <Link to="/category-gifts">Gifts</Link>

          <div className=' mega-submenu8'>
            <div className='row px-5'>
              <div className='col-md-3'>



                <Link>Gift By Budget</Link>

                <Link>Gift by size</Link>

                <Link>Gift cards</Link>


              </div>

              <div className='col-md-3'>
                <Link>Customization</Link>

                <Link>Gift Wraps</Link>

                <Link>Smart Gift</Link>
              </div>

              <div className='col-md-2'>
                <img src={col3} className='img-fluid'></img>
              </div>

              <div className='col-md-4'>
                <img src={Ling1} className='img-fluid'></img>

              </div>
            </div>
          </div>
        </div>

        <div className='mega-menu9'>
          <Link to="/new-arrivals" >New Arrivals</Link>
        </div>
      </div>




    </div>


  )
}

export default Header
