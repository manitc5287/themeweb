

import React, { useState, useEffect } from 'react'
import Header from '../../../../Component/Header/Header'
import "./bra.css";
import Image1 from "../../../../assets/women/arrivals/beauty (1).jpg"
import Image2 from "../../../../assets/women/arrivals/beauty (2).jpg"
import Image3 from "../../../../assets/women/arrivals/beauty (3).jpg"
import Image4 from "../../../../assets/women/arrivals/beauty (4).jpg"
import Image5 from "../../../../assets/women/arrivals/beauty (5).jpg"
import Image6 from "../../../../assets/women/arrivals/beauty (6).jpg"
import Image7 from "../../../../assets/women/arrivals/beauty (7).jpg"
import Image8 from "../../../../assets/women/arrivals/beauty (8).jpg"
import Image9 from "../../../../assets/women/arrivals/beauty (9).jpg"
import Image10 from "../../../../assets/women/arrivals/beauty (10).jpg"
import Image11 from "../../../../assets/women/arrivals/beauty (11).jpg"
import Image12 from "../../../../assets/women/arrivals/beauty (12).jpg"
import Footer from '../../../../Component/Footer/Footer';
import { Icon } from '@iconify/react';
import Newsletter from '../../../../Component/Newsletter/Newsletter';
import Braslider from './Braslider';
import Filter from '../../../../Component/Filter/Filter';
import FilterMain from '../../../../Component/Filter/FilterMain';


const Bra = () => {


    const [colorRed, setColorRed] = useState()
    const [grid, setGrid] = useState(false);
    localStorage.setItem('bragrid', grid);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts()
    }, [])


    const getProducts = async () => {
        let result = await fetch("http://127.0.0.1:5000/products");
        result = await result.json();
        console.log(result)
        setProducts(result)
    }


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





    return (
        <div>
            <Header />
            <section className='sale-main'>
                <div className='container'>
                    <div className='row mt-3'>
                        <small>
                            Women {'>'} Bra's
                        </small>

                        <h2>
                            Bra's
                        </h2>


                        <ul className='filter' id="filter">
                            <li className='' onClick={() => clearSelection()}>
                                <p>View All</p>
                            </li>
                            <li onClick={() => toggleStyle("Balconette")} className={clickedStyles.includes("Balconette") ? 'mystyle' : ''}>
                                <p>Balconette</p>
                            </li>
                            <li onClick={() => toggleStyle("Bralette")} className={clickedStyles.includes("Bralette") ? 'mystyle' : ''}>
                                <p>Bralette</p>
                            </li>
                            <li onClick={() => toggleStyle("Push-Up")} className={clickedStyles.includes("Push-Up") ? 'mystyle' : ''}>
                                <p>Push-Up</p>
                            </li>
                            <li onClick={() => toggleStyle("Triangle")} className={clickedStyles.includes("Triangle") ? 'mystyle' : ''}>
                                <p>Triangle</p>
                            </li>
                            <li onClick={() => toggleStyle("Strap-less")} className={clickedStyles.includes("Strap-less") ? 'mystyle' : ''}>
                                <p>Strap-less</p>
                            </li>
                        </ul>



                    </div>
                </div>
            </section>


            <section>
                <div className='container'>



                    <div className='row mt-2'>

                        <div className='d-flex justify-content-between'>
                            <div className='Knit-sorting'>
                              <FilterMain />
                            </div>
                            <div className=''>
                                <Icon icon="vaadin:grid-big-o" className='mx-2' width="16" height="16" onClick={() => setGrid(true)} />
                                <Icon icon="vaadin:grid-small" width="16" height="16" onClick={() => setGrid(false)} />
                            </div>
                        </div>


                    </div>

                    <div className='row'>


                        {products === null ? (
                            <></>
                        ) : (
                            products
                                .filter(clickedStyles.length > 0 ? (product) => product.category === "Bra" && clickedStyles.includes(product.subCategory)
                                    : (product) => product.category === "Bra")
                                .map((product) => (
                                    <div
                                        className={grid ? "col-md-6 col-lg-6" : "col-md-3 col-lg-3"}
                                        key={product._id}
                                    >
                                        <div>
                                            <Braslider
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

export default Bra

