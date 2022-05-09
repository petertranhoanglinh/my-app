import './App.css'
import Login from './screen/Login';
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import Product from './components/Product';
import Home from './components/Home';
import Balance from './components/Balance';
import Coin from './components/Coin';
import SignUp from './screen/SignUp';
function App(){
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/product' element = {<Product></Product>}/>
        <Route path='/login' element = {<Login></Login>}/>
        <Route path='/' element = {<Home></Home>}/>
        <Route path='/balance' element = {<Balance></Balance>}/>
        <Route path='/coin' element = {<Coin></Coin>}/>
        <Route path='/signUp' element = {<SignUp></SignUp>}/>
      </Routes>
    </div>
  )
}
export default App;