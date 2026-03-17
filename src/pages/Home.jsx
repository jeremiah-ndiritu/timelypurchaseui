import { FaSearch, FaSyncAlt, FaTruck } from "react-icons/fa"
import Footer from "../components/Footer"
import FeaturedItems from "./products/FeaturedItems"
export default function Home() {
  return (
    <section>
      <div className="hero">
      <div className="overlay">
        <h1>Find it.Rent it.Love it</h1>
        <p>Find what you need for campus life in seconds<br/>
Rent laptops, cameras and more - quick and easy</p>
        <button className="browse">Browse Items</button>
        </div>
        <div className="hero-img">
          <img src="hero2.jpeg" alt="Timely Purchase"/>
        </div>
        </div>
       <div className="info-strip">
              <div className="info-item">
                <h3>🚀Fast Delivery</h3>
                <p>Swift & Secure Shipping</p>
                </div>
                <div className="info-item">
                <h3>💎Quality Guarantee</h3>
                <p>Tested and reliable for use</p>
                </div>
                <div className="info-item">
                <h3>💰Student Rates</h3>
                <p>Budget-friendly rentals</p>
                </div>
                <div className="info-item" style={{border:"none"}}>
                <h3>🔐Safe & Secure</h3>
                <p>Secure booking and pickup</p>
                </div>

        </div>
         <section className="how-works">
        <h2>Get Started</h2>
        <h4>Just a few steps to book your gear</h4>
        <div className="steps">
            <div className="step">
               <FaSearch className="step-icon"/>
              <h3>Browse & Check</h3>
              <p>Search our collection of equipment.Pick your
                dates and book online in just a few clicks
              </p>
            </div>
            <div className="step">
               <FaTruck className="step-icon"/>
              <h3>Pickup or Delivery</h3>
              <p>Whether it's self-pickup or delivery, we ensure 
                your rental items reach you safely and on time.
              </p>
            </div>
            <div className="step">
              <FaSyncAlt className="step-icon"/>
              <h3>Use & Return</h3>
              <p>Use your rented item freely during your selected period, 
                simple pickup or drop-off when done.</p>
            </div>
        </div>
    </section>
    <FeaturedItems/>
    <section className="cta-section">
      <div className="cta-part">
      <h3>Ready to get the equipment you need?</h3>
      <p>Join hundeds of customers benefiting fom us.<br/>
        Fast delivery or instant pickup available.
      </p>
      </div>
      <button>Start Renting Now</button>
    </section>
    <Footer/>
    </section>
  )
}