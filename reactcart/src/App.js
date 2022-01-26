
import './App.css';

import Activity from "./component/Activity";
import Login from './component/Login';
import { Route, Routes} from 'react-router-dom';
import Product from "./component/Product"
import Phones from "./component/Phones"
import Navbar from "./component/Navbar";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>

    <Route path="/" element={<Login/>}>
   
    </Route>


    
   
    <Route path="/product" element={  <Product/>}>
  
    </Route>
  

    <Route path="/activity" element={  <Activity/>}>
  
    </Route>
   

    <Route path="/phones" element={  <Phones/>}>
  
    </Route>
    </Routes>
  
    </div>
  );
}

export default App;
