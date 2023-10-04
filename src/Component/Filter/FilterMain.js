import React, { useRef, useState } from 'react'
import Filter from './Filter';
import "./filter.css";
import { Icon } from '@iconify/react';
import Filter2 from "./Filter2";

const FilterMain = () => {

    const filterContentRef = useRef(null);
    const [display, setDisplay] = useState(false)
    const [display2, setDisplay2] = useState(false)
    const addClass = () => {
        setDisplay(!display)
        setDisplay2(false)
    };

    const addClass2 = () => {
        setDisplay2(!display2)
        setDisplay(false)
    };

    return (
        <div className='filter_main'>
           
                    <div className='' >
                        <p onClick={() => addClass()}> Filter {display?<Icon icon="ic:baseline-greater-than" rotate={3} />: <Icon icon="ic:baseline-greater-than" rotate={1} />} </p>
                        <Filter setDisplay={setDisplay}  display={display} />
                    </div>


                    <div className='' >
                        <p onClick={() => addClass2()}> Sort {display2?<Icon icon="ic:baseline-greater-than" rotate={3} />: <Icon icon="ic:baseline-greater-than" rotate={1} />} </p>
                        <Filter2 setDisplay2={setDisplay2}  display={display2} />
                    </div>


           </div>

    )
}

export default FilterMain
