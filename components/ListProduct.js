import React from "react";
import { Link } from 'react-router-dom'
import Url from "./Url"
const token = localStorage.getItem('token');
const AuthStr = 'Bearer ' + token;
class ListProduct extends React.Component {

    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            DataisLoaded: false,
            'pdtName': '*',
        };
    }
    openImg = (src) => {
        window.location.href = src;
    }
    searchProduct = () => {
        var pdtName = this.state.pdtName;
        let headersList = {
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Accept-Language": "application/json",
            "Authorization": AuthStr
        }
        fetch(Url.URL_REST+"product/getProduct/" + pdtName, {
            method: "GET",
            headers: headersList
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
        let headersList = {
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Accept-Language": "application/json",
            "Authorization": AuthStr
        }
        fetch(Url.URL_REST+"api/product/getProduct/*", {
            method: "GET",
            headers: headersList
        }).then((res) => res.json())
            .then((json) => {
                this.setState({
                    products: json,
                    DataisLoaded: true
                });
            })

    }
    render() {
        const { DataisLoaded, products } = this.state;
        if (!DataisLoaded) return <div>
            <h6 className="text-title-cl"> Plesea login.... </h6> </div>;
        else
            return (
                <div>
                    <div className="container">
                        <input type='text' name='pdtName' onChange={this.setPram} placeholder='Search product' />
                        <button onClick={this.searchProduct}>search</button>
                        <div class="row" >
                            {
                                products.map(
                                    product =>
                                        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{ width: "40 px", padding: "20px" }}>
                                            <div className="thumbnail">
                                                <img src={Url.URL_REST + product.image}
                                                    alt="image" style={{ width: "80px", height: "100px" }} onClick={() => this.openImg(Url.URL_REST + product.image)} />
                                                <div style={{ width: "10px", height: "110px" }}>
                                                    <h4>{product.pdtName}</h4>
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