import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/shop' element={<Shop></Shop>}></Route>
      <Route path='/inventory' element={<Inventory></Inventory>}></Route>
      <Route path='/order' element={<Order></Order>}></Route>
    </Routes>
   
    </div>
  );
}

export default App;
