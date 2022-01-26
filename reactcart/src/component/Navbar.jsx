import { Link } from "react-router-dom";

export const Navbar =  () =>
{
    return <div>
     <Link to="/">Login</Link>
   
    <Link to="/product"  style={{margin:"10px"}}>Product</Link>

    <Link to="/activity"  style={{margin:"10px"}}>Activity</Link>

    <Link to="/phones"  style={{margin:"10px"}}>Phones</Link>
   
    </div>
}

export default Navbar;