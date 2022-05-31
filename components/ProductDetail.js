import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Url from "./Url"
const ProductDetail = () =>{
    const {pdtId} = useParams();
    const [state, setValue] = useState({pdtID:pdtId, product:{}});
   // setValue({pdtID: pdtId});
    useEffect(() =>{
        fetch(Url.URL_REST+"api/product/getPdt/"+pdtId, {
            method: "GET",
            headers: Url.headersList
            }).then((res) => res.json())
            .then((json) => {
                setValue({
                    product: json
                });
        })
    })

    return (
        <div>
           
           
                <span>Product Id </span>:<span>{state.product.pdtId}</span>
          
           
            
        </div>

    );
}
export default ProductDetail