import {Link} from 'react-router-dom';
import React from "react";
import Util from "./Util";


class Cart extends React.Component {

    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            carts: [],
            DataisLoaded: false,
            searchCoin: '',
        };
    }

 
    
    setPram = (event) => {
        this.setState({ [event.target.name]: event.target.value.trim() });
    }
    componentDidMount(item) {
        if (item == null) {
            fetch(Util.URL_REST + "api/order/getListOrderTmt" ,{
                method: "GET",
                headers: Util.headersList
            }).then((res) => res.json())
                .then((json) => {
                    console.log(json);
                    this.setState({
                        carts: json,
                        DataisLoaded: true
                    });
                })
        } else {
            this.setState({
                coins: item,
                DataisLoaded: true
            })
        }

    }


    render() {
        const { DataisLoaded , carts} = this.state;
        if (!DataisLoaded) return <div>
            <h6 className="text-title-cl"> Plesea login.... </h6> </div>;
        else
            return (
              <div>
              <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
              {/*---- Include the above in your HEAD tag --------*/}
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-10 col-md-offset-1">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th className="text-center">Price</th>
                          <th className="text-center">Total</th>
                          <th>&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        {
                            carts.map(
                              cart =>

                          <tr>
                            <td className="col-sm-8 col-md-6">
                              <div className="media">
                                <a className="thumbnail pull-left" href="#"> <img className="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" style={{width: '72px', height: '72px'}} /> </a>
                                <div className="media-body">
                                  <h4 className="media-heading"><a href="#">Product name</a></h4>
                                  <h5 className="media-heading"> by <a href="#">{cart.pdtId}</a></h5>
                                  <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                                </div>
                              </div></td>
                            <td className="col-sm-1 col-md-1" style={{textAlign: 'center'}}>
                              <input type="email" className="form-control" id="exampleInputEmail1" defaultValue={3} />
                            </td>
                            <td className="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td>
                            <td className="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
                            <td className="col-sm-1 col-md-1">
                              <button type="button" className="btn btn-danger">
                                <span className="glyphicon glyphicon-remove" /> Remove
                              </button></td>
                         </tr>
                        
                        )
                        }
                        <tr>
                          <td> &nbsp; </td>
                          <td> &nbsp; </td>
                          <td> &nbsp; </td>
                          <td><h5>Subtotal</h5></td>
                          <td className="text-right"><h5><strong>$24.59</strong></h5></td>
                        </tr>
                        <tr>
                          <td> &nbsp; </td>
                          <td> &nbsp; </td>
                          <td> &nbsp; </td>
                          <td><h5>Estimated shipping</h5></td>
                          <td className="text-right"><h5><strong>$6.94</strong></h5></td>
                        </tr>
                        <tr>
                          <td> &nbsp; </td>
                          <td> &nbsp; </td>
                          <td> &nbsp; </td>
                          <td><h3>Total</h3></td>
                          <td className="text-right"><h3><strong>$31.53</strong></h3></td>
                        </tr>
                        <tr>
                          <td> &nbsp; </td>
                          <td> &nbsp; </td>
                          <td> &nbsp; </td>
                          <td>
                            <button type="button" className="btn btn-default">
                            <Link to={'/listProduct'}>  <span className="glyphicon glyphicon-shopping-cart"> Continue Shopping</span></Link>
                            
                            </button></td>
                          <td>
                            <button type="button" className="btn btn-success">
                              Checkout <span className="glyphicon glyphicon-play" />
                            </button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            );
    }
}

export default Cart;