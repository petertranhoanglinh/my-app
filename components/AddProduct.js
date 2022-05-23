/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import Url from "./Url"

const token = localStorage.getItem('token');
const AuthStr = 'Bearer '+token;
const userDetail = JSON.parse(localStorage.getItem('userDetail'));
class AddProduct extends React.Component {

	// Constructor
	constructor(props) {
		super(props);
        console.log(this.props.pdtcd)
		this.state = {
			DataisLoaded: false,
		};
    //console.log(this.props.params.testValue);
    this.onImageChange = this.onImageChange.bind(this)
    this.setPram = this.setPram.bind(this) ;
	}
  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        photo: URL.createObjectURL(event.target.files[0]),
        imageData:event.target.files[0] 
      });
    }
  };
  setPram=(event)=>{
        this.setState({[event.target.name] : event.target.value.trim()});
    }
  handleChange =(event) => {    
    this.setState({range: event.target.value});  
  }
  upLoad= ()=>{
            let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": AuthStr,
            "Accept-Language": "application/json",
            }

           const formData = new FormData();
           if(this.state.photo !== ""){
            formData.append('imageData',   this.state.imageData);
           }
           formData.append('title',   this.state.title);
           formData.append('range',   this.state.range);
           formData.append('note',   this.state.note);

            // let bodyContent = JSON.stringify({
            //   imgData:formData
            // });

            fetch("http://localhost:8089/api/notify/save", { 
              method: "POST",
              body: formData,
              headers: headersList
            }).then(function(response) {
              return response.json();
            }).then(function(data) {
              alert(data.returnMessage);
              console.log(data);
              window.location.href = Url.url+"notify";
            })
    
  }
	componentDidMount() {
            let headersList = {
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Accept-Language": "application/json",
                "Authorization" : AuthStr
               } 
            fetch(Url.URL_REST+"getUserDetail", { 
                 method: "GET", 
                 headers: headersList
             }).then((res) => res.json())
               .then((json) => {
                   console.log(json);
                   this.setState({
                       DataisLoaded: true,
                   });
               })
   }	
	render() {
		const { DataisLoaded} = this.state;
		if (!DataisLoaded) return <div>
			<h6 className="text-title-cl"> Plesea login.... </h6> </div> ;
    if(userDetail.role !== "ADMIN") return <div>
     <h6 className="text-title-cl"> You do not have permission to add product.... </h6> </div>
        else  
        return (
            <div className="container">
              <h2>Registration</h2>
              <div className="form-group">
                <label htmlFor="firstName" className="col-sm-3 control-label">First Name</label>
                <div className="col-sm-9">
                  <input type="text" id="firstName" placeholder="First Name" className="form-control" autofocus />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="col-sm-3 control-label">Last Name</label>
                <div className="col-sm-9">
                  <input type="text" id="lastName" placeholder="Last Name" className="form-control" autofocus />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="col-sm-3 control-label">Email* </label>
                <div className="col-sm-9">
                  <input type="email" id="email" placeholder="Email" className="form-control" name="email" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="col-sm-3 control-label">Password*</label>
                <div className="col-sm-9">
                  <input type="password" id="password" placeholder="Password" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="col-sm-3 control-label">Confirm Password*</label>
                <div className="col-sm-9">
                  <input type="password" id="password" placeholder="Password" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="birthDate" className="col-sm-3 control-label">Date of Birth*</label>
                <div className="col-sm-9">
                  <input type="date" id="birthDate" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber" className="col-sm-3 control-label">Phone number </label>
                <div className="col-sm-9">
                  <input type="phoneNumber" id="phoneNumber" placeholder="Phone number" className="form-control" />
                  <span className="help-block">Your phone number won't be disclosed anywhere </span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="Height" className="col-sm-3 control-label">Height* </label>
                <div className="col-sm-9">
                  <input type="number" id="height" placeholder="Please write your height in centimetres" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="weight" className="col-sm-3 control-label">Weight* </label>
                <div className="col-sm-9">
                  <input type="number" id="weight" placeholder="Please write your weight in kilograms" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3">Gender</label>
                <div className="col-sm-6">
                  <div className="row">
                    <div className="col-sm-4">
                      <label className="radio-inline">
                        <input type="radio" id="femaleRadio" defaultValue="Female" />Female
                      </label>
                    </div>
                    <div className="col-sm-4">
                      <label className="radio-inline">
                        <input type="radio" id="maleRadio" defaultValue="Male" />Male
                      </label>
                    </div>
                  </div>
                </div>
              </div> {/* /.form-group */}
              <div className="form-group">
                <div className="col-sm-9 col-sm-offset-3">
                  <span className="help-block">*Required fields</span>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Register</button>
          </div>
        );
    }
}
export default AddProduct;