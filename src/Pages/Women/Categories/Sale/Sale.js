import React, { useState } from 'react'
import Header from '../../../../Component/Header/Header'
import "./sale.css";
import Salebanner from "../../../../assets/women/Sale/Salebanner.jpg"
import SaleProduct from './SaleComp/SaleProduct';
import Image1 from "../../../../assets/women/arrivals/beauty (1).jpg"
import Image2 from "../../../../assets/women/arrivals/beauty (2).jpg"
import Image3 from "../../../../assets/women/arrivals/beauty (3).jpg"
import Image4 from "../../../../assets/women/arrivals/beauty (4).jpg"
import Image5 from "../../../../assets/women/arrivals/beauty (5).jpg"
import Image6 from "../../../../assets/women/arrivals/beauty (6).jpg"
import Footer from '../../../../Component/Footer/Footer';
import { Icon } from '@iconify/react';
import Newsletter from '../../../../Component/Newsletter/Newsletter';
import { useEffect } from 'react';
import FilterMain from '../../../../Component/Filter/FilterMain';
const Sale = () => {


    const [colorRed, setColorRed] = useState()
    const [grid, setGrid] = useState(false);
    localStorage.setItem('salegrid', grid);

    /*********Data from Database********* */

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, [])


    const getProducts = async () => {
        let result = await fetch("http://127.0.0.1:5000/products");
        result = await result.json();

        setProducts(result)
    }


    // ******************************FilterAtion***********************************

    const [clickedStyles, setClickedStyles] = useState([]);

    function clearSelection() {
        const elements = document.querySelectorAll('.filter li');
        elements.forEach((element) => {
            element.classList.remove('mystyle');
        });

        setClickedStyles([]);
    }

    const toggleStyle = (styleName) => {
        if (clickedStyles.includes(styleName)) {
            setClickedStyles(clickedStyles.filter((clickedStyle) => clickedStyle !== styleName));
        } else {
            setClickedStyles([...clickedStyles, styleName]);
        }
    };

    // ******************************FilterAtion***********************************


    return (
        <div>
            <Header />
            <section className='sale-main'>
                <div className='container'>
                    <div className='row mt-3'>
                        <small>
                            Women {'>'} Sale
                        </small>

                        <h2>
                            Women Summer Sale
                        </h2>

                        {/* <ul>
                            <li onClick={() => setColorRed("1")}>View All</li>
                            <li onClick={() => setColorRed("2")}>Bras</li>
                            <li onClick={() => setColorRed("3")}>Panties</li>

                            <li onClick={() => setColorRed("4")}>Sleepwear</li>
                        </ul> */}




                        <ul className='filter' id="filter">
                            <li className='' onClick={() => clearSelection()}>
                                <p>View All</p>
                            </li>
                            <li onClick={() => toggleStyle("Bras")} className={clickedStyles.includes("Bras") ? 'mystyle' : ''}>
                                <p>Bras</p>
                            </li>
                            <li onClick={() => toggleStyle("Sleepwear")} className={clickedStyles.includes("Sleepwear") ? 'mystyle' : ''}>
                                <p>Sleepwear</p>
                            </li>
                            <li onClick={() => toggleStyle("Panties")} className={clickedStyles.includes("Panties") ? 'mystyle' : ''}>
                                <p>Panties</p>
                            </li>
                        </ul>



                    </div>


                </div>
            </section>


            <section>
                <div className='container'>

                    <div className='row '>
                        <div className='filterdisplay'>
                            <div className='arrival-sorting'>
                               <FilterMain />
                            </div>

                            <div className=''>
                                <Icon icon="vaadin:grid-big-o" className='mx-2' width="16" height="16" onClick={() => setGrid(true)} />
                                <Icon icon="vaadin:grid-small" width="16" height="16" onClick={() => setGrid(false)} />
                            </div>
                        </div>

                    </div>
                    <div className='row'>

                        <div className='col-lg-6'>
                            <div className='sale-inner-banner'>
                                <img src={Salebanner} className='img-fluid'></img>
                            </div>
                        </div>

                        {products === null ? (
                            <></>
                        ) : (
                            products
                                .filter(clickedStyles.length > 0 ? (product) => product.category === "Sale" && clickedStyles.includes(product.subCategory)
                                    : (product) => product.category === "Sale")
                                .map((product) => (
                                    <div
                                        className={grid ? "col-md-6 col-lg-6" : "col-md-3 col-lg-3"}
                                        key={product._id}
                                    >
                                        <div>
                                            <SaleProduct
                                                _id={product._id}
                                                price={product.sale_price}
                                                cutprice={product.price}
                                                image1={product.image}
                                                image2={product.image}
                                                image3={product.image}
                                                title={product.title}
                                            />
                                        </div>
                                    </div>
                                ))
                        )}



                    </div>
                </div>
            </section>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Sale
