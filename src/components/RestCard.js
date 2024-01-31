import { CDN_URL } from "../utils/constant";

const RestCard = ( props ) => {
    const { resData } = props; 
      
   
      return (
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
          <img className="reslogo" src={CDN_URL + resData.data.cloudinaryImageId}/>
  
          <h3>{resData.data.name}</h3>
          <h3>{resData.data.cuisines.join(", ")}</h3>
          <h3>{resData.data.avgRating} stas</h3>
          <h3>{resData.data.costForTwo / 100 } for two</h3>
          <h3>{resData.data.deliveryTime} minutes</h3>
          
  
      </div>
  )
      };

    export default RestCard;



