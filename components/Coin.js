import React from "react";
const token = localStorage.getItem('token');
const AuthStr = 'Bearer '+token;
class Coin extends React.Component {

	// Constructor
	constructor(props) {
		super(props);
		this.state = {
			coins: [],
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
            console.log(json);
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
        <div>
            
            
                <input type='text' name = 'searchCoin' onChange={this.setPram} placeholder='Search coinId'/>
                <button onClick={this.searchCoin}>search</button>
             
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="text-th-cl">CoinId</th>
                        <th className="text-th-cl">CoinName</th>
                        <th className="text-th-cl">Price</th>
                        <th className="text-th-cl">Update-time</th>
                        <th className="text-th-cl">update Price</th>
                    </tr>
                </thead>
                <tbody>
                    {  
                       coins.map(
                       coin =>
                       <tr key = {coin.coinId}>
                           <td className="text-td-cl">{coin.coinId}</td>
                           <td className="text-td-cl">{coin.coinName}</td>
                           <td className="text-td-cl">{coin.price}</td>
                           <td className="text-td-cl">{coin.timeUpdate}</td>
                           <td><button onClick={()=>this.UpdatePrice(coin.coinId)} className ="btn btn-primary">update</button></td>
                       </tr>
                           )
                    }
                </tbody>
            </table>
       </div>
	);
}
}

export default Coin;