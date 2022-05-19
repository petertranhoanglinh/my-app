import React from "react";
import {Link} from 'react-router-dom'
const token = localStorage.getItem('token');
const AuthStr = 'Bearer '+token;
class ListProduct extends React.Component {

	// Constructor
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			DataisLoaded: false,
            searchCoin:'',
		};
	}

    UpdatePrice =(coinId)=>{
        fetch("http://localhost:8089/api/coin/getMaketCap/"+coinId).then((res) => res.json())
        .then((json) => {
            console.log(json);
            this.componentDidMount();
        })
        
    }

    searchCoin =()=>{
        
        var coinId = this.state.searchCoin;
        fetch("http://localhost:8089/api/coin/getMaketCap/"+coinId)
        .then((res) => res.json())
        .then((json) => {
            var arr = new Array(json);
            if(json.statusCode ===2){
                alert(json.message)
                return false;
            }
            this.componentDidMount(arr);
        })
        
    }
    setPram=(event)=>{
        this.setState({[event.target.name] : event.target.value.trim()});
    }
	componentDidMount(item) {
        if(item ==null){
            let headersList = {
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Accept-Language": "application/json",
                "Authorization" : AuthStr
               } 
            fetch("http://localhost:8089/api/coin/getAllCoin", { 
                 method: "GET",
                 headers: headersList
             }).then((res) => res.json())
               .then((json) => {
                   console.log(json);
                   this.setState({
                       products: json,
                       DataisLoaded: true
                   });
               })
        }else{
            this.setState({
                products:item,
                DataisLoaded:true
            })
        }  
       
   }
	render() {
		const { DataisLoaded, products } = this.state;
		if (!DataisLoaded) return <div>
			<h6 className="text-title-cl"> Plesea login.... </h6> </div> ;
        else  
        return (
       <div>
        <div className="container">
                <input type='text' name = 'searchCoin' onChange={this.setPram} placeholder='Search product'/>
                <button onClick={this.searchCoin}>search</button>
            <div class="row" >
            {
                products.map(
                    product =>
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{width:"50 px", padding:"20px"}}>
               <div className="thumbnail">
                    <img  src='https://shopapple.vn/wp-content/uploads/2021/07/iphone-12-mau-tim-purple-2021.jpg' 
                    alt="iphone 13" style={{width:"100px",height:"90px"}}/>
                    <div style={{width:"10px" , height:"90px"}}>
                        <h4>{product.coinId}</h4>
                        <p>
                            {product.price}
                        </p>
                        <p>  
                           <Link 
                           to={{
                            pathname: "/setProduct",
                            state: { pdtcd: 'jack'}
                          }}
                           > <button type="button" class="btn btn-primary">Buy</button></Link>
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