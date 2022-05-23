/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from 'react-router-dom'
import Url from "./Url"
class ListProduct extends React.Component {

    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            DataisLoaded: false,
            'pdtName': '*',
            pdtKinds:[]
        };
    }
    openImg = (src) => {
        window.location.href = src;
    }
    searchProduct = () => {
        var pdtName = this.state.pdtName;
        fetch(Url.URL_REST+"api/product/getProduct/" + pdtName, {
            method: "GET",
            headers: Url.headersList
        }).then((res) => res.json())
            .then((json) => {
                this.setState({
                    products: json,
                    DataisLoaded: true
                });
            })

    }
    setPram = (event) => {
        this.setState({ [event.target.name]: event.target.value.trim() });
    }
    componentDidMount() {
        fetch(Url.URL_REST+"api/product/getProduct/*", {
            method: "GET",
            headers: Url.headersList
        }).then((res) => res.json())
            .then((json) => {
                this.setState({
                    products: json,
                    DataisLoaded: true
                });
            })
        fetch(Url.URL_REST+"api/product/getPdtKind", {
                method: "GET",
                headers: Url.headersList
            }).then((res) => res.json())
                .then((json) => {
                    this.setState({
                        pdtKinds: json
                    });
                })

    }
    render() {
        const { DataisLoaded, products, pdtKinds } = this.state;
        if (!DataisLoaded) return <div>
            <h6 className="text-title-cl"> Plesea login.... </h6> </div>;
        else
            return (
                <div>
                    <div className="container">
                        <input type='text' name='pdtName' onChange={this.setPram} placeholder='Search product' />
                        <button onClick={this.searchProduct}>search</button>
                        <select>
                            {
                                pdtKinds.map(
                                    product =>
                                      <option value={product.pdtKind}>{product.pdtKind}</option>
                                )
                            }
                        </select>
                        
                        <div class="row" >
                            {
                                products.map(
                                    product =>
                                        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{ width: "40 px", padding: "20px" }}>
                                            <div className="thumbnail">
                                                <img src={Url.URL_REST + product.image}
                                                    alt="image" style={{ width: "80px", height: "100px" }} onClick={() => this.openImg(Url.URL_REST + product.image)} />
                                                <div style={{ width: "110px", height: "110px" , textAlign: 'center'}}>
                                                    <h6>{product.pdtName}</h6>
                                                    <p>
                                                        {product.price} {product.kindCoin}
                                                    </p>
                                                    <p>
                                                        <Link to="/setPdt" params={{ pdtCd: product.pdtCd }} className="btn">Buy</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>)
                            }
                        </div>
                    </div>
                </div>
            );
    }
}

export default ListProduct;