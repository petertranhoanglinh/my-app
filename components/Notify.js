/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Url from "./Url"
const token = localStorage.getItem('token');
const AuthStr = 'Bearer '+token;


class Notify extends React.Component {
 
	// Constructor
	constructor(props) {
		super(props);
		this.state = {
			notifys: [],
			DataisLoaded: false,
		};
	}
    openImg=(src)=>{
        window.location.href = src;
      }
    setPram=(event)=>{
        this.setState({[event.target.name] : event.target.value.trim()});
    }
	componentDidMount() {
            let headersList = {
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Accept-Language": "application/json",
                "Authorization" : AuthStr
               } 
            fetch("http://localhost:8089/api/notify/getAll", { 
                 method: "GET",
                 headers: headersList
             }).then((res) => res.json())
               .then((json) => {
                   console.log(json);
                    this.setState({
                       notifys: json,
                       DataisLoaded: true
                   });
               })
       
   }
		
			
	render() {
		const { DataisLoaded, notifys } = this.state;
		if (!DataisLoaded) return <div>
			<h6 className="text-title-cl"> Plesea login.... </h6> </div> ;
        else  
        return (
        <div>
            
           
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="text-th-cl">Id</th>
                        <th className="text-th-cl">Title</th>
                        <th className="text-th-cl">Content</th>
                        <th className="text-th-cl">Even Date</th>
                        <th className="text-th-cl">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {  
                       notifys.map(
                       notify =>
                       <tr key = {notify.coinId}>
                           <td className="text-td-cl">{notify.id}</td>
                           <td className="text-td-cl">{notify.title}</td>
                           <td className="text-td-cl">{notify.note}</td>
                           <td className="text-td-cl">{notify.evenDate}</td>
                           <td className="text-td-cl"  onClick={()=>this.openImg(Url.URL_IMAGE+notify.image)}>
                           <img src={Url.URL_IMAGE+notify.image} className="img-responsive"alt="Image" style={{width:'70px' , textAlign:'center'}}/></td>
                       </tr>
                           )
                    }
                </tbody>
            </table>
           
            
            
       </div>
	);
}
}

export default Notify;