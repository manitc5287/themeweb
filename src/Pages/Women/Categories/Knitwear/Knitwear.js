import React, { useState, useEffect } from 'react'
import Header from '../../../../Component/Header/Header'
import "./knitwear.css";
import Footer from '../../../../Component/Footer/Footer';
import { Icon } from '@iconify/react';
import Newsletter from '../../../../Component/Newsletter/Newsletter';
import Knitslider from './Knitslider';
import { Link } from 'react-router-dom';
import FilterMain from '../../../../Component/Filter/FilterMain';

const Knitwear = () => {
    const [colorRed, setColorRed] = useState();
    const [grid, setGrid] = useState(false);
    localStorage.setItem('knitgrid', grid);

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

            <section className='knitwear-banner'>
                <div >
                    <h4> Subscribe with one click <br /> Free shipping on all orders.</h4>

                    <div> <Link to="/"> Subscribe</Link>  <Link to="/"> Login now</Link></div>
                </div>
            </section>

            <section className='sale-main'>
                <div className='container'>
                    <div className='row mt-3'>
                        <small>
                            Women {'>'} Knitwear
                        </small>

                        <h2>
                            Knitwear
                        </h2>

                        <ul className='filter' id="filter">
                            <li className='' onClick={() => clearSelection()}>
                                <p>View All</p>
                            </li>
                            <li onClick={() => toggleStyle("Long Sleevs")} className={clickedStyles.includes("Long Sleevs") ? 'mystyle' : ''}>
                                <p>Long Sleevs</p>
                            </li>
                            <li onClick={() => toggleStyle("Short Sleevs")} className={clickedStyles.includes("Short Sleevs") ? 'mystyle' : ''}>
                                <p>Short Sleevs</p>
                            </li>
                            <li onClick={() => toggleStyle("Bodysuits")} className={clickedStyles.includes("Bodysuits") ? 'mystyle' : ''}>
                                <p>Bodysuits</p>
                            </li>
                            <li onClick={() => toggleStyle("Pants")} className={clickedStyles.includes("Pants") ? 'mystyle' : ''}>
                                <p>Pants</p>
                            </li>

                        </ul>

                    </div>
                </div>
            </section>


            <section>
                <div className='container'>

                    <div className='row '>
                        <div className='filterdisplay'>
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
                                .filter(clickedStyles.length > 0 ? (product) => product.category === "Knitwear" && clickedStyles.includes(product.subCategory)
                                    : (product) => product.category === "Knitwear")
                                .map((product) => (
                                    <div
                                        className={grid ? "col-md-6 col-lg-6" : "col-md-3 col-lg-3"}
                                        key={product._id}
                                    >
                                        <div>
                                            <Knitslider
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

export default Knitwear

