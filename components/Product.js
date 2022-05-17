import React from "react";
const token = localStorage.getItem('token');
const AuthStr = 'Bearer '+token;
class Product extends React.Component {

	// Constructor
	constructor(props) {
		super(props);
		this.state = {
			coins: [],
			DataisLoaded: true,
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
                       coins: json,
                       DataisLoaded: true
                   });
               })
        }else{
            this.setState({
                coins:item,
                DataisLoaded:true
            })
        }  
       
   }
		
			
	render() {
		const { DataisLoaded, coins } = this.state;
		if (!DataisLoaded) return <div>
			<h6 className="text-title-cl"> Plesea login.... </h6> </div> ;
        else  
        return (
        <div className="container">
                <input type='text' name = 'searchCoin' onChange={this.setPram} placeholder='Search coinId'/>
                <button onClick={this.searchCoin}>search</button>
            <div class="row" style={{width:"50 px", paddingBottom:"10px"}}>
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" >
              <div className="thumbnail">
                    <img  src='https://shopapple.vn/wp-content/uploads/2021/07/iphone-12-mau-tim-purple-2021.jpg' alt="iphone 13"/>
                    <div style={{width:"10px" , height:"30px"}}>
                        <h4>Iphone 12 plus</h4>
                        <p>
                            250000
                        </p>
                        <p>
                            <a className="btn btn-primary">Mua hàng</a>
                        </p>
                    </div>
             </div>
                </div>
            </div>
       
       </div>
	);
}
}

export default Product;