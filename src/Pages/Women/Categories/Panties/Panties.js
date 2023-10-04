

import React, { useState, useEffect} from 'react'
import Header from '../../../../Component/Header/Header'
import "./panties.css";
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
import Pantiesslider from './Pantiesslider';
import FilterMain from '../../../../Component/Filter/FilterMain';


const Panties = () => {
    const [colorRed, setColorRed] = useState();
    const [grid, setGrid] = useState(false);

    localStorage.setItem('pantiesgrid' , grid);

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

            <section className='panties-banner'>
                <div >
                    <h4> 3 Panties for $35 or 6 panties for $60 </h4>
                    <small>Stock up and Save! Discount applied at checkout.</small>
                </div>
            </section>

            <section className='panties-main'>
                <div className='container'>
                    <div className='row mt-3'>
                        <small>
                            Women {'>'} Panties
                        </small>

                        <h2>
                            Panties
                        </h2>

                        <ul className='filter' id="filter">
                            <li className='' onClick={() => clearSelection()}>
                                <p>View All</p>
                            </li>
                            <li onClick={() => toggleStyle("Cheeky")} className={clickedStyles.includes("Cheeky") ? 'mystyle' : ''}>
                                <p>Cheeky</p>
                            </li>
                            <li onClick={() => toggleStyle("Thongs")} className={clickedStyles.includes("Thongs") ? 'mystyle' : ''}>
                                <p>Thongs</p>
                            </li>
                            <li onClick={() => toggleStyle("Panties")} className={clickedStyles.includes("Panties") ? 'mystyle' : ''}>
                                <p>Panties</p>
                            </li>
                            <li onClick={() => toggleStyle("BodyShorts")} className={clickedStyles.includes("BodyShorts") ? 'mystyle' : ''}>
                                <p>BodyShorts</p>
                            </li>
                           
                        </ul>

                    </div>


                </div>
            </section>


            <section>
                <div className='container'>

                    <div className='row '>
                        <div className='filterdisplay'>
                            <div className='Panties-sorting'>
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
                                .filter(clickedStyles.length>0?(product) => product.category === "Panties" && clickedStyles.includes(product.subCategory) 
                                : (product) => product.category === "Panties" )
                                .map((product) => (
                                    <div
                                        className={grid ? "col-md-6 col-lg-6" : "col-md-3 col-lg-3"}
                                        key={product._id}
                                    >
                                        <div>
                                            <Pantiesslider
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

export default Panties

