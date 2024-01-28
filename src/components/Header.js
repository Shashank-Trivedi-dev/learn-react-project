import { LOGO_URL } from "../utils/constant";

export const Header = () => (
    <div className="header">
       <div className="logo-container">
           <img className="logo" src={LOGO_URL}/>
       </div>
       <div className="nav-items">
           <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Menu</a></li>
               <li><a href="#">Contact</a></li>
               <li><a href="#">Cart</a></li>
           </ul>
       </div>
    </div>
   );

   export default Header;