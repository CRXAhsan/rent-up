import React from "react" 
import "./price.css"

const Price = () => {
  return (
    <>
      <section class="price padding">
        <div class="container">
          <div class="heading">
            <h1>Select Your Package</h1>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
          </div>

          <div class="content flex mtop">
          
            <div class="box shadow">
              <div class="topbtn">
                <button class="btn3"></button>
                </div>
              <h3>Basic</h3>
              <h1><span>$</span>29</h1>
              <p>per user, per month</p>
              <ul>
                <li>
               
                  <label style={{background: "rgba(39, 174, 96, 0.12)", color: "rgb(39, 174, 96"}}>
                    <i class="fa-solid fa-check"></i>
                  </label>
                  <p>99.5% Uptime Guarantee</p>
                </li>
                <li>
                  <label style={{background: "rgba(39, 174, 96, 0.12)", color: "rgb(39, 174, 96"}}>
                    <i class="fa-solid fa-check"></i>
                  </label>
                  <p>120GB CDN Bandwidth</p>
                </li>
                <li>
                  <label style={{background: "rgba(39, 174, 96, 0.12)", color: "rgb(39, 174, 96"}}>
                    <i class="fa-solid fa-check"></i>
                  </label>
                  <p>5GB Cloud Storage</p>
                </li>
                <li>
                  <label style={{background: "rgba(220, 53, 69, 0.12)", color: "rgb(220, 56, 72)"}}>
                    <i class="fa-solid fa-x"></i>
                  </label>
                  <p>Personal Help Support</p>
                </li>
                <li>
                  <label style={{background: "rgba(220, 53, 69, 0.12)", color: "rgb(220, 56, 72)"}}>
                    <i class="fa-solid fa-x"></i>
                  </label>
                  <p>Enterprise SLA</p>
                </li>
              </ul>
              <button class="btn5" style={{background: "#fff", color: "rgb(39, 174, 96"}}>Start Basic</button>
            </div>
            
            <div class="box shadow">
              <div class="topbtn"><button class="btn3">Best Value</button></div>
              <h3>Standard</h3>
              <h1><span>$</span>49</h1>
              <p>per user, per month</p>
              <ul>
              <li>
               
               <label style={{background: "rgba(39, 174, 96, 0.12)", color: "rgb(39, 174, 96"}}>
                 <i class="fa-solid fa-check"></i>
               </label>
               <p>99.5% Uptime Guarantee</p>
             </li>
             <li>
               <label style={{background: "rgba(39, 174, 96, 0.12)", color: "rgb(39, 174, 96"}}>
                 <i class="fa-solid fa-check"></i>
               </label>
               <p>120GB CDN Bandwidth</p>
             </li>
             <li>
               <label style={{background: "rgba(39, 174, 96, 0.12)", color: "rgb(39, 174, 96"}}>
                 <i class="fa-solid fa-check"></i>
               </label>
               <p>5GB Cloud Storage</p>
             </li>
             <li>
               <label style={{background: "rgba(39, 174, 96, 0.12)", color: "rgb(39, 174, 96"}}>
                 <i class="fa-solid fa-check"></i>
               </label>
               <p>Personal Help Support</p>
             </li>
             <li>
               <label style={{background: "rgba(220, 53, 69, 0.12)", color: "rgb(220, 56, 72)"}}>
                 <i class="fa-solid fa-x"></i>
               </label>
               <p>Enterprise SLA</p>
             </li>
              </ul>
              <button class="btn5" style={{background: "rgb(39, 174, 96", color: "#fff"}}>Start Standard</button>
            </div>
          
            <div class="box shadow">
              <div class="topbtn"><button class="btn3"></button></div>
              <h3>Platinum</h3>
              <h1><span>$</span>79</h1>
              <p>2 users, per month</p>
              <ul>
              <li>
               
               <label style={{background: "rgba(39, 174, 96, 0.12)", color: "rgb(39, 174, 96"}}>
                 <i class="fa-solid fa-check"></i>
               </label>
               <p>99.5% Uptime Guarantee</p>
             </li>
             <li>
               <label style={{background: "rgba(39, 174, 96, 0.12)", color: "rgb(39, 174, 96"}}>
                 <i class="fa-solid fa-check"></i>
               </label>
               <p>120GB CDN Bandwidth</p>
             </li>
             <li>
               <label style={{background: "rgba(39, 174, 96, 0.12)", color: "rgb(39, 174, 96"}}>
                 <i class="fa-solid fa-check"></i>
               </label>
               <p>5GB Cloud Storage</p>
             </li>
             <li>
               <label style={{background: "rgba(39, 174, 96, 0.12)", color: "rgb(39, 174, 96"}}>
                 <i class="fa-solid fa-check"></i>
               </label>
               <p>Personal Help Support</p>
             </li>
             <li>
               <label style={{background: "rgba(39, 174, 96, 0.12)", color: "rgb(39, 174, 96"}}>
                 <i class="fa-solid fa-check"></i>
               </label>
               <p>Enterprise SLA</p>
             </li>
              </ul>
              <button class="btn5" style={{background: "#fff", color: "rgb(39, 174, 96"}}>Start Platinum</button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Price
