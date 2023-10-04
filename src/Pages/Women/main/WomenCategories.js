import React from 'react'
import Lin3 from "../../../assets/women/Product/Lin10.jpg";
import Lin12 from "../../../assets/women/Product/Lin12.jpg"
import Lin13 from "../../../assets/women/Product/Lin13.jpg"
import { Link } from 'react-router-dom';

const WomenCategories = () => {
    return (
        <section className='women-categories mt-5'>
            <div className='container'>
                <div className='row'>
                    <h2 className='text-center'>Categories</h2>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-4'>
                    <div class="contenttt">
                    <Link to="category-bras" >
                        <div class="content-overlay"></div>
                        <img class="content-image" src={Lin12} alt="" />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title">Bra's</h3>
                            <p class="content-text">Elevate your lingerie game with our exquisite collection of bras designed for comfort and confidence.</p>
                        </div>
                    </Link>
                </div>
                
                    </div>

                    <div className='col-lg-4'>
                    <div class="contenttt">
                    <Link to="category-panties" >
                        <div class="content-overlay"></div>
                        <img class="content-image" src={Lin3} alt="" />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title">Pantie's</h3>
                            <p class="content-text">Experience ultimate comfort and style with our exquisite collection of panties.</p>
                        </div>
                    </Link>
                </div>
                    </div>

                    <div className='col-lg-4'>
                    <div class="contenttt">
                    <Link to="category-lingerie" >
                        <div class="content-overlay"></div>
                        <img class="content-image" src={Lin13} alt="" />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title">Lingerie</h3>
                            <p class="content-text">Indulge in luxurious allure with our enchanting lingerie collection, designed to ignite your confidence and captivate your desires.</p>
                        </div>
                    </Link>
                </div>
                    </div>
                </div>
            </div>

          
             
                
           

        </section>
    )
}

export default WomenCategories
