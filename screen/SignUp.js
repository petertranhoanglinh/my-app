import React from "react";
export default class SignUp extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            "userId":"",
            "password":"",
            "rePassword":"",
            "userName":"",
            "rankCd":"",
            "role":"",
            "ctrId":"",
            "refferralCode":"",
        }
        this.setParams = this.setParams.bind(this) ;
        
    }
    setParams  = (event) =>{
        this.setState({[event.target.name] : event.target.value.trim()})

    }
    signUp = () =>{
        if(this.state.password !== this.state.rePassword){
            alert("password incorrect")
            return false;
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "userId": this.state.userId ,
            "password": this.state.password ,
            "userName": this.state.userName ,
            "rankCd": this.state.rankCd ,
            "role": this.state.role ,
            "ctrId": this.state.ctrId ,
            "rate": 0,
            "refferralCode":this.state.refferralCode 
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8089/api/addUser", requestOptions)
        .then(response =>{
            console.log(response)
            if(response.ok){
                return response.json()
            }
            throw Error(response.status)
        })     
        .then(result => {
            console.log(result)
            alert("suscess Register");
        })
        .catch(error => {console.log('error', error)
         alert("userId has used");
    });
    window.location.reload(false);
    }
    render(){
        return (
            <section className="vh-100 bg-image" style={{backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'}}>
              <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                      <div className="card" style={{borderRadius: '15px'}}>
                        <div className="card-body p-5">
                          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                          <form>
                            <div className="form-outline mb-4">
                              <input  onChange={this.setParams} type="text" id="form3Example1cg" className="form-control form-control-lg" name = "userId"/>
                              <label className="form-label" htmlFor="form3Example1cg">UserId</label>
                            </div>
                            <div className="form-outline mb-4">
                              <input onChange={this.setParams}  type="text" id="form3Example3cg" className="form-control form-control-lg" name = "userName" />
                              <label className="form-label" htmlFor="form3Example3cg">UserName</label>
                            </div>
                            <div className="form-outline mb-4">
                              <input type="password" onChange={this.setParams} id="form3Example4cg" className="form-control form-control-lg"  name = "password"/>
                              <label className="form-label" htmlFor="form3Example4cg" >Password</label>
                            </div>
                            <div className="form-outline mb-4">
                              <input type="password" onChange={this.setParams} id="form3Example4cdg" className="form-control form-control-lg"  name = "rePassword" />
                              <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                            </div>
                            <div className="form-outline mb-4">
                              <input type="text" id="form3Example3cg" onChange={this.setParams}  className="form-control form-control-lg" name = "rankCd"   />
                              <label className="form-label" htmlFor="form3Example3cg">RankCd</label>
                            </div>
                            <div className="form-outline mb-4">
                              <input type="text" id="form3Example3cg" onChange={this.setParams}  className="form-control form-control-lg" name = "role"  />
                              <label className="form-label" htmlFor="form3Example3cg">Role</label>
                            </div>
                            <div className="form-outline mb-4">
                              <input type="text" id="form3Example3cg"  onChange={this.setParams} className="form-control form-control-lg" name = "ctrId" />
                              <label className="form-label" htmlFor="form3Example3cg">ctrId</label>
                            </div>
                            <div className="form-outline mb-4">
                              <input type="text" id="form3Example3cg" onChange={this.setParams}  className="form-control form-control-lg" name = "refferralCode" />
                              <label className="form-label" htmlFor="form3Example3cg">Refferral Code</label>
                            </div>
                            <div className="form-check d-flex justify-content-center mb-5">
                              <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
                              <label className="form-check-label" htmlFor="form2Example3g">
                                I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                              </label>
                            </div>
                            <div className="d-flex justify-content-center">
                              <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={this.signUp}>Register</button>
                            </div>
                            <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
    }
}   