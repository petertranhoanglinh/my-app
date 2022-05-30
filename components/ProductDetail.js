import { useParams } from "react-router-dom";
import React, { useState } from 'react';
const ProductDetail = () =>{
    const {pdtId} = useParams();
    const [state, setValue] = useState({pdtID:pdtId});
   // setValue({pdtID: pdtId});
   

    return (
        <div>
           
           <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <input type="text" value={state.pdtID} onChange={(ev) => setValue({...state, pdtID: ev.target.value})} />
                        </tr>
                    </tbody>
                </table>
                
               
           </div>
           
            
        </div>

    );
}
export default ProductDetail