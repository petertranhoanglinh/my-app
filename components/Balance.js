import React from "react";
const token = localStorage.getItem('token');
const AuthStr = 'Bearer '+token;
class Balance extends React.Component {
	// Constructor
	constructor(props) {
		super(props);
		this.state = {
			balances: [],
			DataisLoaded: false,
            'quantitySend':0,
            'contract':'',
            addCoin:''
		};
	}
    handleClick = (event) =>{
        // alert(quantityCoin)
        this.setState({[event.target.name] : event.target.value})
        
    }

    withdraw = (quantityCoin, coinId) => {
        if(this.state.quantitySend > quantityCoin){
            alert('The amount of coins sent cannot be greater than the amount available')
            return false;
        }
        var myHeaders = new Headers();
        myHeaders.append("Accept-Language", "application/json");
        myHeaders.append("Authorization",AuthStr);
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
        "contract": this.state.contract,
        "coinId": coinId,
        "quantity": this.state.quantitySend
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8089/api/account/withdraw", requestOptions)
        .then(response => {
            if(response.ok){
                return response.json()
            }})
        .then(result => {
            if(result.returnMessage === 'fail'){
                alert('address does not exist');
            }else{
                alert(result.returnMessage);
                this.componentDidMount();
            }
        })
        .catch(error => console.log('error', error));

    }
	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
        let headersList = {
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Accept-Language": "application/json",
            "Authorization":AuthStr
           } 
        fetch("http://localhost:8089/api/account/balance", { 
             method: "GET",
             headers: headersList
         }).then((res) => res.json())
           .then((json) => {
               console.log(json);
               this.setState({
                   balances: json,
                   DataisLoaded: true
               });
           })
   }
   setPram=(event)=>{
    this.setState({[event.target.name] : event.target.value.trim()});
   }

   addCoin =()=>{
        
    var coinId = this.state.addCoin;
    var myHeaders = new Headers();
    myHeaders.append("Accept-Language", "application/json");
    myHeaders.append("Authorization",AuthStr);
    myHeaders.append("Cookie", "Cookie_1=value");

    var raw = "";

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:8089/api/account/add/"+coinId, requestOptions)
    .then(response => response.json())
    .then(result => {console.log(result)
    if(result.statusCode === 1030){
        alert(result.message)
        return false;
    }else{
        alert('suscess');
    }
    this.componentDidMount();
    })
    .catch(error => {
        console.log('error', error)});
   }
		
			
	render() {
		const { DataisLoaded, balances } = this.state;
		if (!DataisLoaded) return <div>
			<h6 className="text-title-cl"> Plesea login... </h6> </div> ;
		else 
        return (
        <div>
            <input type='text' name = 'addCoin' onChange={this.setPram} placeholder='add Balance'/>
                <button onClick={this.addCoin}>Add</button> 
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="text-th-cl">AccountId</th>
                        <th className="text-th-cl">CoinId</th>
                        <th className="text-th-cl">Contract</th>
                        <th className="text-th-cl">Amount of coins</th>
                        <th className="text-th-cl">Time Update</th>
                        <th className="text-th-cl">Cost</th>
                        <th className="text-th-cl">Total amount (USD)</th>
                        <th className="text-th-cl">Amount of coin sent</th>
                        <th className="text-th-cl">Contract to send</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       balances.map(
                       coin =>
                       <tr key = {coin.id}>
                           <td className="text-td-cl">{coin.accountId}</td>
                           <td className="text-td-cl">{coin.coinId}</td>
                           <td className="text-td-cl">{coin.contract}</td>
                           <td className="text-td-cl">{coin.quantityReal}</td>
                           <td className="text-td-cl">{coin.timeUpdate}</td>
                           <td className="text-td-cl">{coin.price}</td>
                           <td className="text-td-cl">{coin.value}</td>
                           <td className="text-td-cl">
                           <input type="number" name="quantitySend" class="form-control" onChange={this.handleClick}/>
                           </td>
                           <td className="text-td-cl">
                           <input type="text" name="contract" class="form-control" onChange={this.handleClick}/>
                           </td>
                           <td className="text-td-cl"> 
                           <button type="button" class="btn btn-primary" onClick={()=>this.withdraw(coin.quantityReal, coin.coinId)}>Withdraw</button></td>
                       </tr>
                           )
                    }
                </tbody>
            </table>
       </div>
	);
}
}

export default Balance;