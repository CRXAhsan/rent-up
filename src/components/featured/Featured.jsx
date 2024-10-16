import React from "react"
import "./Featured.css"
import fea1 from "../../assets/h1.png"
import fea2 from "../../assets/h2.png"
import fea3 from "../../assets/h3.png"
import fea4 from "../../assets/h4.png"
import fea5 from "../../assets/h6.png"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <div class="heading">
            <h1>Featured Property Types</h1>
            <p>Find All Type of Property.</p>
          </div>
          <div className='content grid5 mtop'>
      
            <div class="box">
              <img src={fea1} alt="" />
              <h4>Family House</h4>
              <label>122 Property</label>
            </div>

            <div class="box">
              <img src={fea2} alt="" />
              <h4>House & Villa</h4>
              <label>155 Property</label>
            </div>

            <div class="box">
              <img src={fea3} alt="" />
              <h4>Apartment</h4>
              <label>300 Property</label>
            </div>

            <div class="box">
              <img src={fea4} alt="" />
              <h4>Office & Studio</h4>
              <label>80 Property</label>
            </div>

            <div class="box">
              <img src={fea5} alt="" />
              <h4>Villa & Condo</h4>
              <label>80 Property</label>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default Featured
