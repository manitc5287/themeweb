import React from 'react'
import { Icon } from '@iconify/react';
const Filter = (props) => {

    const displayy = props.display;
    return (

        displayy == true ? (
            <div className="absolute_div">
                <div className='container '>
                    <div className='row'>
                        <ul className='filter2_main'>
                            <li> <input type="checkbox" id="size32A" name="size32A" value="32A" />
                                <label for="size32A" > Top Seller's</label></li>

                            <li>
                                <input type="checkbox" id="size34B" name="size34B" value="34B" />
                                <label for="size34B"> Price high to low</label>
                            </li>

                            <li>
                                <input type="checkbox" id="size34B" name="size34B" value="34B" />
                                <label for="size34B"> Price Low to high</label>
                            </li>

                            <li>
                                <input type="checkbox" id="size36C" name="size36C" value="36C" />
                                <label for="size36C"> New Arrivals</label>
                            </li>


                        </ul>

                    </div>
                    <Icon onClick={()=>props.setDisplay2(false)} icon="akar-icons:cross" rotate={3} className='crossIcon' />
                </div>
            </div>
        ) : <></>

    )
}

export default Filter
