import React from "react"
import "./footer.css"
import logoLight from "../../assets/logo-light.png"

const Footer = () => {
  return (
    <>
      <section class="footerContact">
        <div class="container">
          <div class="send flex">
            <div class="text">
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button class="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>


      <footer>
        <div class="container">
          <div class="box">
            <div class="logo">
              <img src={logoLight} alt="" />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
              <div class="input flex">
                <input type="email" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div class="box">
            <h3>LAYOUTS</h3>
            <ul>
              <li>Home Page</li>
              <li>About Page</li>
              <li>Service Page</li>
              <li>Property Page</li>
              <li>Contact Page</li>
              <li>Single Blog</li>
            </ul>
          </div>

          <div class="box">
            <h3>ALL SECTIONS</h3>
            <ul>
              <li>Headers</li>
              <li>Features</li>
              <li>Attractive</li>
              <li>Testimonials</li>
              <li>Videos</li>
              <li>Footers</li>
            </ul>
          </div>

          <div class="box">
            <h3>COMPANY</h3>
            <ul>
              <li>About </li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Affiliate </li>
              <li>Login</li>
              <li>Changelog</li>
            </ul>
          </div>
        </div>
      </footer>

      <div class="legal">
        <span>© 2021 RentUP. Designed By GorkCoder.</span>
      </div>

    </>
  )
}

export default Footer
