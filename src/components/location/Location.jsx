import React from "react"
import "./style.css"
import city1 from "../../assets/city-1.png"
import city2 from "../../assets/city-2.png"
import city3 from "../../assets/city-3.png"
import city4 from "../../assets/city-4.png"
import city5 from "../../assets/city-5.png"
import city6 from "../../assets/city-6.png"

const Location = () => {
  return (
    <>
      <section class="location padding">
  <div class="container">
    <div class="heading">
      <h1>Explore By Location</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>
    <div class="content grid3 mtop">
      
      <div class="box">
        <img src={city1} alt="New Orleans, Louisiana" />
        <div class="overlay">
          <h5>New Orleans, Louisiana</h5>
          <p>
            <label>12 Villas</label>
            <label>07 Offices</label>
            <label>10 Apartments</label>
          </p>
        </div>
      </div>
      
      <div class="box">
        <img src={city2} alt="Jersey, United States" />
        <div class="overlay">
          <h5>Jersey, United States</h5>
          <p>
            <label>12 Villas</label>
            <label>07 Offices</label>
            <label>10 Apartments</label>
          </p>
        </div>
      </div>
      
      <div class="box">
        <img src={city3} alt="Liverpool, London" />
        <div class="overlay">
          <h5>Liverpool, London</h5>
          <p>
            <label>12 Villas</label>
            <label>07 Offices</label>
            <label>10 Apartments</label>
          </p>
        </div>
      </div>
      
      <div class="box">
        <img src={city4} alt="New York, United States" />
        <div class="overlay">
          <h5>New York, United States</h5>
          <p>
            <label>12 Villas</label>
            <label>07 Offices</label>
            <label>10 Apartments</label>
          </p>
        </div>
      </div>
      
      <div class="box">
        <img src={city5} alt="Montreal, Canada" />
        <div class="overlay">
          <h5>Montreal, Canada</h5>
          <p>
            <label>12 Villas</label>
            <label>07 Offices</label>
            <label>10 Apartments</label>
          </p>
        </div>
      </div>
      
      <div class="box">
        <img src={city6} alt="California, USA" />
        <div class="overlay">
          <h5>California, USA</h5>
          <p>
            <label>12 Villas</label>
            <label>07 Offices</label>
            <label>10 Apartments</label>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Location
