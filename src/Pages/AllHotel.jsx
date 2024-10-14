import './CSS/AllHotel.css'
import Item from '../Items/Items';
import hotel from '../assets/Hotels';

function AllHotel(){
    return(
        <div className="popular">
        <h2>Our Most Popular Hotels</h2>
        <div className="popular-hotels">
          {hotel.map((item, i) => {
              return <Item key={i} name={item.name} rating={item.rating} image={item.image} price={item.price} location={item.location}/> 
          })}
        </div>
      </div>
    )
}
export default AllHotel;