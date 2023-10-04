import React from 'react'
import Image from "../../../assets/women/Product/sideLin1.jpg";
import Image2 from "../../../assets/women/Product/sideLin2.jpg";

const ProductTabbing = () => {
    return (
        <div className='Women_Product_Tabbing'>
            <div className='container'>
                <div className='row'>

                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='tabbing-image'> 
                            <img src={Image} className='img-fluid'></img>
                           <div className='cover'>
                           <h6>Lorem ipsum is a dummy text</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, magnam! Expedita illum exercitationem excepturi officia. Quam, quaerat reiciendis. Cumque, dolorum.</p>
                           </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                    <div className='tabbing-image'> 
                            <img src={Image2} className='img-fluid'></img>
                           <div className='cover'>
                           <h6>Lorem ipsum is a dummy text</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, magnam! Expedita illum exercitationem excepturi officia. Quam, quaerat reiciendis. Cumque, dolorum.</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTabbing
