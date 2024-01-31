import RestCard from "./RestCard";
import resList from "../utils/mockData"
import { useState, useEffect } from "react";

const Body = () => {
    
const [resListmin, setresListmin ] = useState(resList);

useEffect(()=>{
console.log("useEffectcalled")
},[]);

    return ( 
    <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={ () => {topRated=resListmin.filter(res=> res.data.avgRating>4);
            setresListmin(topRated)} } >top rated </button>   
            <button className="filter-btn" onClick={ () => {topRated2=resListmin;
            setresListmin(topRated2)} } >view all </button>   
        </div>
        <div className="rest-container">
          {
          resListmin.map(restaurant => <RestCard key={restaurant.data.id} resData={restaurant}/>)
          }
            
            
            
        </div>
    </div>
) ;
        };
export default Body;