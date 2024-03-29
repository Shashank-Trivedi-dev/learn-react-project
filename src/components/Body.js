import RestCard from "./RestCard";
import resList from "../utils/mockData"
import { useState, useEffect } from "react";

const Body = () => {
    
const [resListmin, setresListmin ] = useState(resList);

useEffect(()=>{
fetchData();
},[]);

const fetchData = async () =>  { 
const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6404268&lng=77.18589949999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

const json = await data.json();
console.log
 (json);


};


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