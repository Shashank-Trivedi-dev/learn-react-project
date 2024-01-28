import RestCard from "./restcard";
import resList from "../utils/mockData"

const Body = () => (
    <div className="body">
        <div className="search">search</div>
        <div className="rest-container">
          {
          resList.map(restaurant => <RestCard key={restaurant.data.id} resData={restaurant}/>)
          }
            
            
            
        </div>
    </div>
) ;

export default Body;