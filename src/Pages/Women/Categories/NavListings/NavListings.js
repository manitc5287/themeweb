import React, { useState, useEffect } from 'react'
import Header from '../../../../Component/Header/Header'
import Footer from '../../../../Component/Footer/Footer'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NavSlider from './NavSlider';
import { Icon } from '@iconify/react';
import FilterMain from '../../../../Component/Filter/FilterMain';
const NavListings = () => {

    const { subcategory } = useParams();
    const [othersub, setOthersub] = useState(subcategory)
    const currentUrl = window.location.href;
    const location = useLocation();
    const [grid, setGrid] = useState(false);
    localStorage.setItem('navgrid', grid);
    const [breadcrumb, setBreadcrumb] = useState("")


    useEffect(() => {
        const pathname = location.pathname;
        const pathSegments = pathname.split('/');
        const womenIndex = pathSegments.indexOf('women');
        if (womenIndex !== -1 && womenIndex < pathSegments.length - 1) {
            const afterWomen = pathSegments.slice(womenIndex + 1, womenIndex + 2).join('/');

            setBreadcrumb(afterWomen);
        } else {
            console.log('No segment found after "/women/".');
        }
    })


    // *****************************data fetch******************************
    const [products, setProducts] = useState([]);


    const getProducts = async () => {
        let result = await fetch("http://127.0.0.1:5000/products");
        result = await result.json();
        console.log(result)
        setProducts(result)
    }


    //   **********************************Captitalize First Letter**********************************
    const valuesSet = new Set();




    useEffect(() => {
        getProducts();
    
       
    
        subcategory.split(/[-]/).filter(Boolean).forEach((value) => {
            valuesSet.add(value);
        });
    
        console.log(valuesSet);
    }, [subcategory]);

    return (
        <div>
            <Header />
            <section className='panties-main'>
                <div className='container'>
                    <div className='row mt-3'>
                        <small>
                            Women {'>'} {breadcrumb.charAt(0).toUpperCase() + breadcrumb.slice(1)} {'>'}  {subcategory.split(/[-]/).join(" / ")}
                        </small>

                        <h2 className='pt-3 pb-3'>
                            {subcategory.split(/[-]/).join(" / ")}
                        </h2>

                    </div>


                </div>
            </section>

            <section>
                <div className='container'>

                    <div className='row pt-3' style={{ borderTop: "1px solid #ccc" }}>
                        <div className='filterdisplay'>
                            <div className='arrival-sorting '>
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
                            products.filter((item) =>
                            item.category.toLowerCase() == breadcrumb.toLowerCase() &&
                           item.subCategory.toLowerCase() === subcategory.toLowerCase()
                        )
                                .map((product) => (
                                  product._id==null?
                                  <h2 className=''>No Product To Display</h2> :
                                  <div
                                  className={grid ? "col-md-6 col-lg-6" : "col-md-3 col-lg-3"}
                                  key={product._id}
                              >
                                  <div>

                                      <NavSlider
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
            <Footer />
        </div>
    )
}

export default NavListings
