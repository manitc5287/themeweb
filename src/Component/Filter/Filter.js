import React from 'react'
import { Icon } from '@iconify/react';
const Filter = (props) => {

   const displayy = props.display;
    return (

   displayy == true? (
<div className="absolute_div"> 
<div className='container '>
   <div className='row'>

       <div className='col-md-3'>
          <ul className=''>
           <li> <input type="checkbox" id="size32A" name="size32A" value="32A" />
           <label for="size32A" > 32A</label></li>

           <li> 
           <input type="checkbox" id="size34B" name="size34B" value="34B" />
           <label for="size34B"> 34B</label>
           </li>

           <li> 
           <input type="checkbox" id="size34B" name="size34B" value="34B" />
           <label for="size34B"> 34B</label>
           </li>

           <li> 
           <input type="checkbox" id="size36C" name="size36C" value="36C" />
           <label for="size36C"> 36C</label>
           </li>

           <li> 
           <input type="checkbox" id="categorySports" name="categorySports" value="Sports" />
           <label for="categorySports"> Sports Bra</label>
           </li>

           <li> 
           <input type="checkbox" id="categoryPushUp" name="categoryPushUp" value="PushUp" />
           <label for="categoryPushUp"> Push-Up Bra</label>
           </li>

           <li>
           <input type="checkbox" id="categoryLace" name="categoryLace" value="Lace" />
           <label for="categoryLace"> Lace Bra</label>
           </li>
          </ul>     
       </div>

       <div className='col-md-3'>
          <ul>
           <li> <input type="checkbox" id="size32A" name="size32A" value="32A" />
           <label for="size32A" > 32A</label></li>

           <li> 
           <input type="checkbox" id="size34B" name="size34B" value="34B" />
           <label for="size34B"> 34B</label>
           </li>

           <li> 
           <input type="checkbox" id="size34B" name="size34B" value="34B" />
           <label for="size34B"> 34B</label>
           </li>

           <li> 
           <input type="checkbox" id="size36C" name="size36C" value="36C" />
           <label for="size36C"> 36C</label>
           </li>

           <li> 
           <input type="checkbox" id="categorySports" name="categorySports" value="Sports" />
           <label for="categorySports"> Sports Bra</label>
           </li>

           <li> 
           <input type="checkbox" id="categoryPushUp" name="categoryPushUp" value="PushUp" />
           <label for="categoryPushUp"> Push-Up Bra</label>
           </li>

           <li>
           <input type="checkbox" id="categoryLace" name="categoryLace" value="Lace" />
           <label for="categoryLace"> Lace Bra</label>
           </li>
          </ul>     
       </div>


       <div className='col-md-3'>
          <ul>
           <li> <input type="checkbox" id="size32A" name="size32A" value="32A" />
           <label for="size32A" > 32A</label></li>

           <li> 
           <input type="checkbox" id="size34B" name="size34B" value="34B" />
           <label for="size34B"> 34B</label>
           </li>

           <li> 
           <input type="checkbox" id="size34B" name="size34B" value="34B" />
           <label for="size34B"> 34B</label>
           </li>

           <li> 
           <input type="checkbox" id="size36C" name="size36C" value="36C" />
           <label for="size36C"> 36C</label>
           </li>

           <li> 
           <input type="checkbox" id="categorySports" name="categorySports" value="Sports" />
           <label for="categorySports"> Sports Bra</label>
           </li>

           <li> 
           <input type="checkbox" id="categoryPushUp" name="categoryPushUp" value="PushUp" />
           <label for="categoryPushUp"> Push-Up Bra</label>
           </li>

           <li>
           <input type="checkbox" id="categoryLace" name="categoryLace" value="Lace" />
           <label for="categoryLace"> Lace Bra</label>
           </li>
          </ul>     
       </div>


       <div className='col-md-3'>
          <ul>
           <li> <input type="checkbox" id="size32A" name="size32A" value="32A" />
           <label for="size32A" > 32A</label></li>

           <li> 
           <input type="checkbox" id="size34B" name="size34B" value="34B" />
           <label for="size34B"> 34B</label>
           </li>

           <li> 
           <input type="checkbox" id="size34B" name="size34B" value="34B" />
           <label for="size34B"> 34B</label>
           </li>

           <li> 
           <input type="checkbox" id="size36C" name="size36C" value="36C" />
           <label for="size36C"> 36C</label>
           </li>

           <li> 
           <input type="checkbox" id="categorySports" name="categorySports" value="Sports" />
           <label for="categorySports"> Sports Bra</label>
           </li>

           <li> 
           <input type="checkbox" id="categoryPushUp" name="categoryPushUp" value="PushUp" />
           <label for="categoryPushUp"> Push-Up Bra</label>
           </li>

           <li>
           <input type="checkbox" id="categoryLace" name="categoryLace" value="Lace" />
           <label for="categoryLace"> Lace Bra</label>
           </li>
          </ul>     
       </div>
   </div>

   <Icon onClick={()=>props.setDisplay(false)} icon="akar-icons:cross" rotate={3} className='crossIcon' />
   </div> 
</div>
   ) : <></>

    )
}

export default Filter
