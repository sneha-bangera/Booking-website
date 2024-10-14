// import './CSS/Home.css'
import Popular from '../Popular/Popular'
import Hero from '../Hero'
import Facilities from '../Facilities'

function Home() {

  return (
    <div className='mt-100'>
        <Hero/>
        <Popular/>
        <Facilities/>
        <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.4368561904216!2d-0.09069572420075676!3d51.505200910864914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760350baa0a1bb%3A0xd5ad768cf235c18a!2sLondon%20Bridge%20Hotel!5e0!3m2!1sen!2sin!4v1723965437100!5m2!1sen!2sin"  
            height="450" 
            style={{border:0, margin: 30, width: "95%", borderRadius:15}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Home