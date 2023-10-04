import React from 'react'
import Header from '../../../Component/Header/Header'
import Home from './Home'
import WomenProductlisiting from './WomenProductlisiting'
import WomenCategories from './WomenCategories'
import WomenStripAd from './WomenStripAd'
import ProductTabbing from './ProductTabbing'
import Footer from '../../../Component/Footer/Footer'
import ProductSliderfull from './ProductSliderfull'
import FullPage1 from './FullPageSlider/FullPage'
import Newsletter from "../../../Component/Newsletter/Newsletter"
const Main = () => {
  return (
    <div>
      <Header />
       
   <Home />
      <WomenProductlisiting />
      <ProductSliderfull /> 
      <WomenCategories />
      <WomenStripAd />
      <ProductTabbing />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Main
