import { FaInstagram, FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

function Footer() {

    return (
      <div className="my-10 flex justify-around">
        <div className='flex flex-col justify-center w-1/5'>
            <p className="text-gray-500 text-justify">Lorem ipsum, earum aliquid, saepe ea esse beatae molestias.</p>
            <div className="flex text-black text-2xl gap-x-5 mt-5">
                <a href='' target="_blank" rel="noopener noreferrer" className="icon"><FaInstagram /></a>
                <a href='' target="_blank" rel="noopener noreferrer" className="icon"><FaFacebook /></a>
                <a href='' target="_blank" rel="noopener noreferrer" className="icon"><FaGoogle /></a>
            </div>
        </div>
        <div className='home'>
            <ul className="text-gray-500">
                <h3 className="text-black">Home</h3>
                <li>Booking</li>
                <li>Facilities</li>
                <li>Location</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='help'>
            <ul className="text-gray-500">
                <h3 className="text-black">Help</h3>
                <li>About Us</li>
                <li>Help center</li>
                <li>Privacy policy</li>
                <li>FAQs</li>
            </ul>
        </div>
        <div className='get-app'>
            <ul className="text-gray-500">
                <h3 className="text-black">Get App</h3>
                <li>iOS app</li>
                <li>Android app</li>
            </ul>
        </div>
      </div>
    )
  }
  
  export default Footer