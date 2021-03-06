import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipments from './components/Shipments/Shipments';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/shop' element={<Shop></Shop>}></Route>
      <Route path='/inventory' element={<RequireAuth><Inventory></Inventory></RequireAuth>}></Route>
      <Route path='/order' element={<Order></Order>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
       <Route path='/shipments' element={<RequireAuth><Shipments></Shipments></RequireAuth>}></Route>
   
    </Routes>
   
    </div>
  );
}

export default App;
