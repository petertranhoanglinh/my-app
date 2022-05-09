function Home(){
    return (
        <div>
          {/* Custom styles for this template */}
          <link href="css/style.css" rel="stylesheet" />
          {/* responsive style */}
          <link href="css/responsive.css" rel="stylesheet" />
          <div className="hero_area">
            {/* header section strats */}
            {/* end header section */}
            {/* slider section */}
            <section className=" slider_section position-relative">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active">01</li>
                  <li data-target="#carouselExampleIndicators" data-slide-to={1}>02</li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-3 offset-md-2">
                        <div className="slider_detail">
                          <h1>
                            INNOVATIVE
                            <span>
                              SOLUTIONS
                            </span>
                          </h1>
                          <p>
                            We find the best solutions fot you, we redesign your home and work places.
                            Discover why over 5,100 home owners trust initiative
                          </p>
                          <div>
                            <a href>
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="slider_img-box">
                          <img src="images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-3 offset-md-2">
                        <div className="slider_detail">
                          <h1>
                            INNOVATIVE
                            <span>
                              SOLUTIONS
                            </span>
                          </h1>
                          <p>
                            We find the best solutions fot you, we redesign your home and work places.
                            Discover why over 5,100 home owners trust initiative
                          </p>
                          <div>
                            <a href>
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="slider_img-box">
                          <img src="images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel_btn-container">
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </section>
            {/* end slider section */}
          </div>
          {/* about section */}
          <section className="about_section layout_padding">
            <div className="container">
              <h2>
                WHY INITIATIVE COMPANY
              </h2>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                its layout. The point of using Lorem
              </p>
            </div>
            <div className="container">
              <div className="about_card-container">
                <div className="about_card">
                  <div className="about-detail">
                    <div className="about_img-box">
                      <img src="images/card-img-1.png" alt="" />
                    </div>
                    <div className="card_detail-ox">
                      <h4>
                        10 YEARS EXPERIENCE
                      </h4>
                      <p>
                        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                        vehicula ut id elit. Morbi leo risus.
                      </p>
                    </div>
                  </div>
                  <div>
                    <a href className="about_btn">
                      Read More
                    </a>
                  </div>
                </div>
                <div className="about_card">
                  <div className="about-detail">
                    <div className="about_img-box">
                      <img src="images/card-img-2.png" alt="" />
                    </div>
                    <div className="card_detail-ox">
                      <h4>
                        A PRO ARCHITECTS TEAM
                      </h4>
                      <p>
                        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                        vehicula ut id elit. Morbi leo risus.
                      </p>
                    </div>
                  </div>
                  <div>
                    <a href className="about_btn">
                      Read More
                    </a>
                  </div>
                </div>
                <div className="about_card">
                  <div className="about-detail">
                    <div className="about_img-box">
                      <img src="images/card-img-3.png" alt="" />
                    </div>
                    <div className="card_detail-ox">
                      <h4>
                        1000+ HAPPY CUSTOMERS
                      </h4>
                      <p>
                        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                        vehicula ut id elit. Morbi leo risus.
                      </p>
                    </div>
                  </div>
                  <div>
                    <a href className="about_btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end about section */}
          {/* portfolio section */}
          <section className="portfolio_section layout_padding2">
            <div className="container">
              <h2>
                OUR PORTFOLIO
              </h2>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                its layout. The point of using Lorem
              </p>
            </div>
            <div className="container layout_padding2-top ">
              <div className="row">
                <div className="col-md-8">
                  <div className="portfolio_img-box">
                    <img src="images/portfolio-img-1.png" alt="" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="portfolio_img-box">
                    <img src="images/portfolio-img-2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="portfolio_img-box">
                    <img src="images/portfolio-img-3.png" alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="portfolio_img-box">
                    <img src="images/portfolio-img-4.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end portfolio section */}
          {/* team section  */}
          <section className="team_section layout_padding">
            <div className="container">
              <h2>
                OUR TEAM
              </h2>
              <p>
                It is a long established fact that a reader will be distracted by the readable
              </p>
            </div>
            <div className="container">
              <div className="team_card-container layout_padding2">
                <div className="team_card">
                  <div className="team_img-box">
                    <img src="images/linh.png" alt="" />
                  </div>
                  <div className="team_detail-box">
                    <h5>
                      Tran Hoang Linh
                    </h5>
                    <p>
                      CEO - BACKEND
                    </p>
                    <div className="team_follow">
                      <h6>
                        Follow On
                      </h6>
                      <div className="team_social">
                        <div>
                          <a href = "https://www.facebook.com/profile.php?id=100017780027039">
                            <img src="images/facebook-logo-button.png" alt="" />
                          </a>
                        </div>
                        <div>
                          <a href>
                            <img src=" images/twitter-logo-button.png" alt="" />
                          </a>
                        </div>
                        <div>
                          <a href>
                            <img src="images/linkedin.png" alt="" />
                          </a>
                        </div>
                        <div>
                          <a href>
                            <img src="images/instagram.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team_card">
                  <div className="team_img-box">
                    <img src="images/thanh.png" alt="" />
                  </div>
                  <div className="team_detail-box">
                    <h5>
                      Tran Thanh
                    </h5>
                    <p>
                      CEO - TESTER
                    </p>
                    <div className="team_follow">
                      <h6>
                        Follow On
                      </h6>
                      <div className="team_social">
                        <div>
                          <a href>
                            <img src="images/facebook-logo-button.png" alt="" />
                          </a>
                        </div>
                        <div>
                          <a href>
                            <img src=" images/twitter-logo-button.png" alt="" />
                          </a>
                        </div>
                        <div>
                          <a href>
                            <img src="images/linkedin.png" alt="" />
                          </a>
                        </div>
                        <div>
                          <a href>
                            <img src="images/instagram.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team_card">
                  <div className="team_img-box">
                    <img src="images/team-3.png" alt="" />
                  </div>
                  <div className="team_detail-box">
                    <h5>
                      Alexi DOE
                    </h5>
                    <p>
                      CEO - DESIGNER
                    </p>
                    <div className="team_follow">
                      <h6>
                        Follow On
                      </h6>
                      <div className="team_social">
                        <div>
                          <a href>
                            <img src="images/facebook-logo-button.png" alt="" />
                          </a>
                        </div>
                        <div>
                          <a href>
                            <img src=" images/twitter-logo-button.png" alt="" />
                          </a>
                        </div>
                        <div>
                          <a href>
                            <img src="images/linkedin.png" alt="" />
                          </a>
                        </div>
                        <div>
                          <a href>
                            <img src="images/instagram.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end team section */}
          {/* contact section */}
          <section className="contact_section layout_padding">
            <div className="container">
              <p>
                Don’t Hesitate To Ask
              </p>
              <h2 className>
                FREE CONSULTATION
              </h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <form action>
                    <div className="contact_form-container">
                      <div>
                        <div>
                          <label>
                            Name
                            <input type="text" />
                          </label>
                        </div>
                        <div>
                          <label>
                            Email
                            <input type="email" />
                          </label>
                        </div>
                        <div>
                          <label>
                            Phone Number
                            <input type="text" />
                          </label>
                        </div>
                        <div>
                          <label>
                            Message
                            <textarea name id cols={30} rows={10} defaultValue={""} />
                          </label>
                        </div>
                        <div className="mt-5">
                          <button type="submit">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <div className="contact_img-box">
                    <img src="images/form-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end contact section */}
          {/* why section */}
          <section className="Why_section layout_padding">
            <div className="container">
              <h2>WHY CHOOSE US?</h2>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the
                readable
                content of a page when looking at its layout. The point of using Lorem
              </p>
            </div>
          </section>
          {/* end why section */}
          {/* info section */}
          <section className="info_section layout_padding">
            <div className="container info_content">
              <div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <h5>
                          About Us
                        </h5>
                        <ul>
                          <li>
                            <a href>
                              It is a long established
                            </a>
                          </li>
                          <li>
                            <a href>
                              fact that a reader will be
                            </a>
                          </li>
                          <li>
                            <a href>
                              distracted by the read
                            </a>
                          </li>
                          <li>
                            <a href>
                              able LoremIt is a long es
                            </a>
                          </li>
                          <li>
                            <a href>
                              tablished fact that a
                            </a>
                          </li>
                          <li>
                            <a href>
                              reader will be distracted
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h5>
                          Contact Us
                        </h5>
                        <ul>
                          <li>
                            <a href>
                              It is a long established
                            </a>
                          </li>
                          <li>
                            <a href>
                              fact that a reader will be
                            </a>
                          </li>
                          <li>
                            <a href>
                              distracted by the read
                            </a>
                          </li>
                          <li>
                            <a href>
                              able LoremIt is a long es
                            </a>
                          </li>
                          <li>
                            <a href>
                              tablished fact that a
                            </a>
                          </li>
                          <li>
                            <a href>
                              reader will be distracted
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="form_container mt-5">
                      <form action>
                        <input type="email" placeholder="Enter Your email" />
                        <button type="submit">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info_img-box">
                      <img src="images/map.png" alt="" />
                    </div>
                    <div className="d-flex justify-content-end pr-5">
                      <div className="social-box">
                        <a href>
                          <img src="images/fb.png" alt="" />
                        </a>
                        <a href>
                          <img src="images/twitter.png" alt="" />
                        </a>
                        <a href>
                          <img src="images/linkedin1.png" alt="" />
                        </a>
                        <a href>
                          <img src="images/instagram1.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end info section */}
          <hr className="footer_hr" />
          {/* footer section */}
          <section className="container-fluid footer_section">
            <p>
              ©
              2019 All Rights Reserved. Design by
              <a href="https://html.design/">Free Html Templates</a>
            </p>
          </section>
          {/* footer section */}
        </div>
      );
}

export default Home;