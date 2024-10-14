// import './Hero.css'
import hero_image from './assets/hero_img.jpg'

function Hero() {

    return (
      <div className='flex bg-green-100 m-10 mt-24 h-4/6 rounded-t-2xl'>
        <div className='w-1/2'>
            <h2 className='text-4xl px-10 py-10 text-justify'>Find your perfect place to stay</h2>
            <p className='px-10 text-justify'>Enjoy your stay at amazing hotels and villas. Search for them here and enjoy your vacations</p>
            <br />
            <p style={{fontWeight: 600}} className='px-10'><span className='rounded-full bg-white py-1 px-2'>▶</span> Watch video</p>
        </div>
        <div className='w-1/2'>
            <img className='rounded-tr-2xl' src={hero_image} alt="" />
        </div>
      </div>
    )
  }
  
  export default Hero