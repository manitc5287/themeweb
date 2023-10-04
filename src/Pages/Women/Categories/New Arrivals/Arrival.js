import React, { useState, useEffect } from 'react'
import Header from '../../../../Component/Header/Header'
import Footer from '../../../../Component/Footer/Footer'
import "./arrival.css";
import Sliderr from './Sliderr';
import { Icon } from '@iconify/react';

const Arrival = () => {

  const [colorRed, setColorRed] = useState();
  const [grid, setGrid] = useState(false);

  localStorage.setItem('arrivalgrid', grid);

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

      <section className='arrival-banner'>
        <div className='container'>
          <div className='row'>
            <p>
              The Art of Indian Lingerie
            </p>
          </div>
        </div>
      </section>

      <section className='arrival-content-grid mt-3'>
        <div className='container'>
          <div className='row'>
            <small>
              Women {'>'} New Arrival
            </small>

            <h2>New Arrivals</h2>

        


            <ul className='filter' id="filter">
              <li className='' onClick={() => clearSelection()}>
                <p>View All</p>
              </li>
              <li onClick={() => toggleStyle("Bras")} className={clickedStyles.includes("Bras") ? 'mystyle' : ''}>
                <p>Bras</p>
              </li>
              <li onClick={() => toggleStyle("Lingerie")} className={clickedStyles.includes("Lingerie") ? 'mystyle' : ''}>
                <p>Lingerie</p>
              </li>
              <li onClick={() => toggleStyle("Panties")} className={clickedStyles.includes("Panties") ? 'mystyle' : ''}>
                <p>Panties</p>
              </li>
              <li onClick={() => toggleStyle("Clothing")} className={clickedStyles.includes("Clothing") ? 'mystyle' : ''}>
                <p>Clothing</p>
              </li>

              <li onClick={() => toggleStyle("Sleepwear")} className={clickedStyles.includes("Sleepwear") ? 'mystyle' : ''}>
                <p>Sleepwear</p>
              </li>

            </ul>


          </div>
        </div>
      </section>

      <section>
        <div className='container'>

          <div className='row mt-3 mb-3'>
            <div className='filterdisplay'>
              <div className='arrival-sorting '>
                <div className='arrivaldisplayflex'>
                  <small> Filter</small> <Icon icon="ant-design:down-outlined" width="10" height="10" /> </div>
                <div className='arrivaldisplayflex'>
                  <small> Sort</small>  <Icon icon="ant-design:down-outlined" width="10" height="10" />
                </div>
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
                .filter(clickedStyles.length > 0 ? (product) => product.category === "New Arrivals" && clickedStyles.includes(product.subCategory)
                  : (product) => product.category === "New Arrivals")
                .map((product) => (
                  <div
                    className={grid ? "col-md-6 col-lg-6" : "col-md-3 col-lg-3"}
                    key={product._id}
                  >
                    <div>
                      <Sliderr
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

export default Arrival
