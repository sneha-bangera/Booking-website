import './Facilities.css';
import { RiComputerLine } from "react-icons/ri";
import { LuParkingCircle } from "react-icons/lu";
import { BsCupHot, BsLightning } from "react-icons/bs";
import { IoWifi } from "react-icons/io5";
import { PiPersonSimpleSwim,PiDotsThreeOutlineLight } from "react-icons/pi";
import { CiDumbbell } from "react-icons/ci";

function Facilities() {

    return (
      <div className="flex m-10 gap-10 my-20 ">
        <div className="w-1/3">
          <h2 className='font-bold'>We provide you with our best facilities</h2>
          <p className='text-gray-500 text-justify'>Lorem ipsum dolor ex, quaerat sapiente expedita quos dolores deserunt accusamus hic delectus eum quisquam ut culpa. Vitae!</p>
          <button className='bg-green-600 py-2 px-5 text-white rounded-3xl mt-5'>Contact Now</button>
        </div>
        <div className="grid grid-cols-4 gap-x-10 gap-y-5">
          <span className='box'>
            <a href=""><RiComputerLine /></a>
            <p>Private Workspace</p>
          </span>
          <span className='box'>
            <a href=""><LuParkingCircle /></a>
            <p>Parking Area</p>
          </span>
          <span className='box'>
            <a href=""><BsCupHot /></a>
            <p>Breakfast</p>
          </span>
          <span className='box'>
            <a href=""><IoWifi /></a>
            <p>Free Wifi</p>
          </span>
          <span className='box'>
            <a href=""><BsLightning /></a>
            <p>Free Electricity</p>
          </span>
          <span className='box'>
            <a href=""><PiPersonSimpleSwim /></a>
            <p>Swimming Pool</p>
          </span>
          <span className='box'>
            <a href=""><CiDumbbell /></a>
            <p>Exercise Space</p>
          </span>
          <span className='box'>
            <a href=""><PiDotsThreeOutlineLight /></a>
            <p>Other Services</p>
          </span>
        </div>
      </div>
    )
  }
  
  export default Facilities;