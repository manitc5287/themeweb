import React, { useState, useEffect } from 'react'
import Header from '../../../../Component/Header/Header'
import "./lingerie.css";
import Footer from '../../../../Component/Footer/Footer';
import { Icon } from '@iconify/react';
import Newsletter from '../../../../Component/Newsletter/Newsletter';
import Lingerieslider from './Lingerieslider';
import FilterMain from '../../../../Component/Filter/FilterMain';

const Lingerie = () => {
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
                            Women {'>'} Lingerie
                        </small>

                        <h2>
                            Lingerie
                        </h2>

                        <ul className='filter' id="filter">
                            <li className='' onClick={() => clearSelection()}>
                                <p>View All</p>
                            </li>
                            <li onClick={() => toggleStyle("Slips & Babydolls")} className={clickedStyles.includes("Slips & Babydolls") ? 'mystyle' : ''}>
                                <p>Slips & Babydolls</p>
                            </li>
                            <li onClick={() => toggleStyle("Corsets")} className={clickedStyles.includes("Corsets") ? 'mystyle' : ''}>
                                <p>Corsets</p>
                            </li>
                            <li onClick={() => toggleStyle("Garter Belts & Garter")} className={clickedStyles.includes("Garter Belts & Garter") ? 'mystyle' : ''}>
                                <p>Garter Belts & Garter</p>
                            </li>
                            <li onClick={() => toggleStyle("Bodysuits")} className={clickedStyles.includes("Bodysuits") ? 'mystyle' : ''}>
                                <p>Bodysuits</p>
                            </li>
                           
                        </ul>


                    </div>


                </div>
            </section>


            <section>
                <div className='container'>

                    <div className='row '>

                        <div className='filterdisplay'>
                            <div className='Lingerie-sorting'>
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
                                .filter(clickedStyles.length > 0 ? (product) => product.category === "Lingerie" && clickedStyles.includes(product.subCategory)
                                    : (product) => product.category === "Lingerie")
                                .map((product) => (
                                    <div
                                        className={grid ? "col-md-6 col-lg-6" : "col-md-3 col-lg-3"}
                                        key={product._id}
                                    >
                                        <div>
                                            <Lingerieslider
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

export default Lingerie

