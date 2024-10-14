import hotel from "../assets/Hotels";
import Item from "../Items/Items";
import { Link } from "react-router-dom";
// import './Popular.css'

function Popular() {

    return (
      <div className="m-10">
        <h2 className="text-4xl mb-5 mt-20">Our Most Popular Hotels</h2>
        <div className="flex w-full">
          <p style={{width:500}} className="mr-96">our most popular hotel which are highly rated and loved by customers</p>
          <Link to='/all_hotel'><button className="items-right text-right flex bg-green-100 text-green-600 rounded-10 py-2 px-5 rounded-3xl ml-32">View All</button></Link>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {hotel.map((item, i) => {
            if(i<3){
              return <Item key={i} name={item.name} rating={item.rating} image={item.image} price={item.price} location={item.location}/> 
            }
          })}
        </div>
      </div>
    )
  }
  
  export default Popular;