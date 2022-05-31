import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Util from "./Util"
const ProductDetail = () =>{
    const {pdtId} = useParams();
    const [state, setValue] = useState({pdtID:pdtId, product:{}, description:""});
   // setValue({pdtID: pdtId});
   useEffect(() => {
    const fetchData = async () => {
    await fetch(Util.URL_REST+"api/product/getPdt/"+pdtId, {
        method: "GET",
        headers: Util.headersList
        }).then((res) => res.json())
        .then((json) => {
            setValue({
                product: json,
                description: json.description
            });
    })
    };
    fetchData();
  }, [pdtId]);

    return (
        <div>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
        <div className="container">
          {/* product */}
          <div className="product-content product-wrap clearfix product-deatil">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="product-image">
                  <div id="myCarousel-2" className="carousel slide">
                    <ol className="carousel-indicators">
                      <li data-target="#myCarousel-2" data-slide-to={0} className />
                      <li data-target="#myCarousel-2" data-slide-to={1} className="active" />
                      <li data-target="#myCarousel-2" data-slide-to={2} className />
                    </ol>
                    <div className="carousel-inner">
                      {/* Slide 1 */}
                      <div className="item active">
                        <img src={Util.URL_REST+state.product.image} className="img-responsive" alt="" />
                      </div>
                      {/* Slide 2 */}
                      <div className="item">
                        <img src={Util.URL_REST+state.product.image1} className="img-responsive" alt="" />
                      </div>
                      {/* Slide 3 */}
                      <div className="item">
                        <img src={Util.URL_REST+state.product.image2} className="img-responsive" alt="" />
                      </div>
                    </div>
                    <a className="left carousel-control" href="#myCarousel-2" data-slide="prev"> <span className="glyphicon glyphicon-chevron-left" /> </a>
                    <a className="right carousel-control" href="#myCarousel-2" data-slide="next"> <span className="glyphicon glyphicon-chevron-right" /> </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
                <h2 className="name">
                  {state.product.pdtName}         
                </h2>
                <hr />
                <h3 className="price-container">
                  {state.product.price} {state.product.kindCoin}
                </h3>
                <hr />
                <div className="description description-tabs">
                  <ul id="myTab" className="nav nav-pills">
                    <li className="active"><a href="#more-information" data-toggle="tab" className="no-margin">Product Description </a></li>
                    <li className><a href="#specifications" data-toggle="tab">Specifications</a></li>
                    <li className><a href="#reviews" data-toggle="tab">Reviews</a></li>
                  </ul>
                  <div id="myTabContent" className="tab-content">
                    <div className="tab-pane fade active in" id="more-information">
                      <br />
                      <strong>Description Title</strong>
                      <p>
                         {state.description}
                      </p>
                    </div>
                    <div className="tab-pane fade" id="specifications">
                      <br />
                      <dl className>
                        <dt>Gravina</dt>
                        <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                        <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                        <dd>Eget lacinia odio sem nec elit.</dd>
                        <br />
                        <dt>Test lists</dt>
                        <dd>A description list is perfect for defining terms.</dd>
                        <br />
                        <dt>Altra porta</dt>
                        <dd>Vestibulum id ligula porta felis euismod semper</dd>
                      </dl>
                    </div>
                    <div className="tab-pane fade" id="reviews">
                      <br />
                      <form method="post" className="well padding-bottom-10" onsubmit="return false;">
                        <textarea rows={2} className="form-control" placeholder="Write a review" defaultValue={""} />
                        <div className="margin-top-10">
                          <button type="submit" className="btn btn-sm btn-primary pull-right">
                            Submit Review
                          </button>
                          <a href="javascript:void(0);" className="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title data-original-title="Add Location"><i className="fa fa-location-arrow" /></a>
                          <a href="javascript:void(0);" className="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title data-original-title="Add Voice"><i className="fa fa-microphone" /></a>
                          <a href="javascript:void(0);" className="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title data-original-title="Add Photo"><i className="fa fa-camera" /></a>
                          <a href="javascript:void(0);" className="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title data-original-title="Add File"><i className="fa fa-file" /></a>
                        </div>
                      </form>
                      <div className="chat-body no-padding profile-message">
                        <ul>
                          <li className="message">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="online" />
                            <span className="message-text">
                              <a href="javascript:void(0);" className="username">
                                Alisha Molly
                                <span className="badge">Purchase Verified</span>
                                <span className="pull-right">
                                  <i className="fa fa-star fa-2x text-primary" />
                                  <i className="fa fa-star fa-2x text-primary" />
                                  <i className="fa fa-star fa-2x text-primary" />
                                  <i className="fa fa-star fa-2x text-primary" />
                                  <i className="fa fa-star fa-2x text-muted" />
                                </span>
                              </a>
                              Can't divide were divide fish forth fish to. Was can't form the, living life grass darkness very image let unto fowl isn't in blessed fill life yielding above all moved
                            </span>
                            <ul className="list-inline font-xs">
                              <li>
                                <a href="javascript:void(0);" className="text-info"><i className="fa fa-thumbs-up" /> This was helpful (22)</a>
                              </li>
                              <li className="pull-right">
                                <small className="text-muted pull-right ultra-light"> Posted 1 year ago </small>
                              </li>
                            </ul>
                          </li>
                          <li className="message">
                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="online" />
                            <span className="message-text">
                              <a href="javascript:void(0);" className="username">
                                Aragon Zarko
                                <span className="badge">Purchase Verified</span>
                                <span className="pull-right">
                                  <i className="fa fa-star fa-2x text-primary" />
                                  <i className="fa fa-star fa-2x text-primary" />
                                  <i className="fa fa-star fa-2x text-primary" />
                                  <i className="fa fa-star fa-2x text-primary" />
                                  <i className="fa fa-star fa-2x text-primary" />
                                </span>
                              </a>
                              Excellent product, love it!
                            </span>
                            <ul className="list-inline font-xs">
                              <li>
                                <a href="javascript:void(0);" className="text-info"><i className="fa fa-thumbs-up" /> This was helpful (22)</a>
                              </li>
                              <li className="pull-right">
                                <small className="text-muted pull-right ultra-light"> Posted 1 year ago </small>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <a href="javascript:void(0);" className="btn btn-success btn-lg">Add to cart {state.product.price} {state.product.kindCoin}</a>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="btn-group pull-right">
                      <button className="btn btn-white btn-default"><i className="fa fa-star" /> Add to wishlist</button>
                      <button className="btn btn-white btn-default"><i className="fa fa-envelope" /> Contact Seller</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end product */}
        </div>
      </div>

    );
}
export default ProductDetail