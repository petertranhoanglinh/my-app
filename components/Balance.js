import React from "react";
const token = localStorage.getItem('token');
const AuthStr = 'Bearer '+token;
const userId = localStorage.getItem('userItem')
class Balance extends React.Component {
	// Constructor
	constructor(props) {
		super(props);
		this.state = {
			balances: [],
			DataisLoaded: false
		};
	}
    handleClick() {
        console.log('this is:', this);
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
		
			
	render() {
		const { DataisLoaded, balances } = this.state;
		if (!DataisLoaded) return <div>
			<h1 className="text-title-cl"> Pleses login... </h1> </div> ;
		else 
        return (
        <div> 
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="text-th-cl">ID</th>
                        <th className="text-th-cl">AccountId</th>
                        <th className="text-th-cl">CoinId</th>
                        <th className="text-th-cl">Contract</th>
                        <th className="text-th-cl">QuantityCoin</th>
                        <th className="text-th-cl">TimeUpdate</th>
                        <th className="text-th-cl">QuantitySend</th>
                        <th className="text-th-cl">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       balances.map(
                       coin =>
                       <tr key = {coin.id}>
                           <td className="text-td-cl">{coin.id}</td>
                           <td className="text-td-cl">{coin.accountId}</td>
                           <td className="text-td-cl">{coin.coinId}</td>
                           <td className="text-td-cl">{coin.contract}</td>
                           <td className="text-td-cl">{coin.quantityCoin}</td>
                           <td className="text-td-cl">{coin.timeUpdate}</td>
                           <td className="text-td-cl">
                           <input type="number" name="" class="form-control"/>
                           </td>
                           <td className="text-td-cl">
                           <input type="text" name="" class="form-control"/>
                           </td>
                           <td className="text-td-cl"> 
                           <button type="button" class="btn btn-primary">Withdraw</button></td>
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