import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div className="w-full flex h-20 justify-around g-x-10 text-center bg-white items-center top-0 fixed">
      <div className="nav-logo">
        <Link to='/' style={{textDecoration:'none', color: 'black'}}><span className='text-4xl font-semibold left-0'>Booking.com</span></Link>
      </div>
      <div className='nav-menu'>
        <ul className="flex justify-center g-x-10">
            <li className='cursor-pointer mr-5'>Booking</li>
            <li className='cursor-pointer mr-5'>Facilities</li>
            <li className='cursor-pointer mr-5'>About</li>
            <li className='cursor-pointer mr-5'>Location</li>
            <li className='cursor-pointer mr-5'>Contact</li>
        </ul>
      </div>
      <div className='nav-login'>
        <Link to='/login'><button className='bg-green-600 text-white text-3x1 cursor-pointer rounded-3xl px-5 py-3'>Login</button></Link>
      </div>
    </div>
  )
}

export default Navbar;