import React from "react"
import "./team.css"
import team1 from "../../assets/team-1.jpg"
import team2 from "../../assets/team-2.jpg"
import team3 from "../../assets/team-3.jpg"
import team4 from "../../assets/team-4.jpg"
import team5 from "../../assets/team-5.jpg"
import team6 from "../../assets/team-1.jpg"


const Team = () => {
  return (
    <>
      <section class="team background">
        <div class="container">
          <div class="heading">
            <h1>Our Featured Agents</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          
          <div class="content mtop grid3">
            
            <div class="box">
              <button class="btn3">50 Listings</button>
              <div class="details">
                <div class="img">
                  <img src={team1} alt="Sargam S. Singh" />
                  <i class="fa-solid fa-circle-check"></i>
                </div>
                <i class="fa fa-location-dot"></i>
                <label>Liverpool, Canada</label>
                <h4>Sargam S. Singh</h4>
                <ul>
                  <li><i class="fa-brands fa-facebook-f"></i></li>
                  <li><i class="fa-brands fa-linkedin"></i></li>
                  <li><i class="fa-brands fa-twitter"></i></li>
                  <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
                <div class="button flex">
                  <button><i class="fa fa-envelope"></i> Message</button>
                  <button class="btn4"><i class="fa fa-phone-alt"></i></button>
                </div>
              </div>
            </div>
            
            <div class="box">
              <button class="btn3">70 Listings</button>
              <div class="details">
                <div class="img">
                  <img src={team2} alt="Harijeet M. Siller" />
                  <i class="fa-solid fa-circle-check"></i>
                </div>
                <i class="fa fa-location-dot"></i>
                <label>Montreal, Canada</label>
                <h4>Harijeet M. Siller</h4>
                <ul>
                  <li><i class="fa-brands fa-facebook-f"></i></li>
                  <li><i class="fa-brands fa-linkedin"></i></li>
                  <li><i class="fa-brands fa-twitter"></i></li>
                  <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
                <div class="button flex">
                  <button><i class="fa fa-envelope"></i> Message</button>
                  <button class="btn4"><i class="fa fa-phone-alt"></i></button>
                </div>
              </div>
            </div>
            
            <div class="box">
              <button class="btn3">80 Listings</button>
              <div class="details">
                <div class="img">
                  <img src={team3} alt="Anna K. Young" />
                  <i class="fa-solid fa-circle-check"></i>
                </div>
                <i class="fa fa-location-dot"></i>
                <label>Denver, USA</label>
                <h4>Anna K. Young</h4>
                <ul>
                  <li><i class="fa-brands fa-facebook-f"></i></li>
                  <li><i class="fa-brands fa-linkedin"></i></li>
                  <li><i class="fa-brands fa-twitter"></i></li>
                  <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
                <div class="button flex">
                  <button><i class="fa fa-envelope"></i> Message</button>
                  <button class="btn4"><i class="fa fa-phone-alt"></i></button>
                </div>
              </div>
            </div>
            
        

          
            
            <div class="box">
              <button class="btn3">50 Listings</button>
              <div class="details">
                <div class="img">
                  <img src={team4} alt="Sargam S. Singh" />
                  <i class="fa-solid fa-circle-check"></i>
                </div>
                <i class="fa fa-location-dot"></i>
                <label>Liverpool, Canada</label>
                <h4>Sargam S. Singh</h4>
                <ul>
                  <li><i class="fa-brands fa-facebook-f"></i></li>
                  <li><i class="fa-brands fa-linkedin"></i></li>
                  <li><i class="fa-brands fa-twitter"></i></li>
                  <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
                <div class="button flex">
                  <button><i class="fa fa-envelope"></i> Message</button>
                  <button class="btn4"><i class="fa fa-phone-alt"></i></button>
                </div>
              </div>
            </div>
            
            <div class="box">
              <button class="btn3">70 Listings</button>
              <div class="details">
                <div class="img">
                  <img src={team5} alt="Harijeet M. Siller" />
                  <i class="fa-solid fa-circle-check"></i>
                </div>
                <i class="fa fa-location-dot"></i>
                <label>Montreal, Canada</label>
                <h4>Harijeet M. Siller</h4>
                <ul>
                  <li><i class="fa-brands fa-facebook-f"></i></li>
                  <li><i class="fa-brands fa-linkedin"></i></li>
                  <li><i class="fa-brands fa-twitter"></i></li>
                  <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
                <div class="button flex">
                  <button><i class="fa fa-envelope"></i> Message</button>
                  <button class="btn4"><i class="fa fa-phone-alt"></i></button>
                </div>
              </div>
            </div>
            
            <div class="box">
              <button class="btn3">80 Listings</button>
              <div class="details">
                <div class="img">
                  <img src={team6} alt="Anna K. Young" />
                  <i class="fa-solid fa-circle-check"></i>
                </div>
                <i class="fa fa-location-dot"></i>
                <label>Denver, USA</label>
                <h4>Anna K. Young</h4>
                <ul>
                  <li><i class="fa-brands fa-facebook-f"></i></li>
                  <li><i class="fa-brands fa-linkedin"></i></li>
                  <li><i class="fa-brands fa-twitter"></i></li>
                  <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
                <div class="button flex">
                  <button><i class="fa fa-envelope"></i> Message</button>
                  <button class="btn4"><i class="fa fa-phone-alt"></i></button>
                </div>
              </div>
            </div>
            
          </div>


        </div>
      </section>

    </>
  )
}

export default Team
