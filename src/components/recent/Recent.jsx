import React from "react";
import "./recent.css";
import p1 from "../../assets/p-1.png"; 
import p2 from "../../assets/p-2.png";
import p3 from "../../assets/p-4.png";
import p4 from "../../assets/p-5.png";
import p5 from "../../assets/p-6.png";
import p6 from "../../assets/p-7.png";

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <div className="heading">
            <h1>Recent Property Listed</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          <div className='content grid3 mtop'>

            <div className="box shadow">
              <div className="img">
                <img src={p1} alt="Property" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background: "rgba(255, 152, 0, 0.1)",
                      color: "rgb(255, 152, 0)",
                    }}
                  >
                    For Rent
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>Red Carpet Real Estate</h4>
                <p>
                  <i className="fa fa-location-dot"></i> 210 Zirak Road, Canada
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">$3,700</button>
                  <span>/sqft</span>
                </div>
                <span>Apartment</span>
              </div>
            </div>

            <div className="box shadow">
              <div className="img">
                <img src={p2} alt="Property" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background: "rgba(37, 181, 121, 0.1)",
                      color: "rgb(37, 181, 121)",
                    }}
                  >
                    For Sale
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>Fairmount Properties</h4>
                <p>
                  <i className="fa fa-location-dot"></i> 5698 Zirak Road, NewYork
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">$9,750</button>
                  <span>/sqft</span>
                </div>
                <span>Condos</span>
              </div>
            </div>

            <div className="box shadow">
              <div className="img">
                <img src={p3} alt="Property" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background: "rgba(255, 152, 0, 0.1)",
                      color: "rgb(255, 152, 0)",
                    }}
                  >
                    For Rent
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>The Real Estate Corner</h4>
                <p>
                  <i className="fa fa-location-dot"></i> 5624 Mooker Market, USA
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">$5,860</button>
                  <span>/sqft</span>
                </div>
                <span>Offices</span>
              </div>
            </div>

            <div className="box shadow">
              <div className="img">
                <img src={p4} alt="Property" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background: "rgba(37, 181, 121, 0.1)",
                      color: "rgb(37, 181, 121)"
                    }}
                  >
                    For Sale
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>Herringbone Realty</h4>
                <p>
                  <i className="fa fa-location-dot"></i> 5621 Liverpool, London
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">$7,540</button>
                  <span>/sqft</span>
                </div>
                <span>Homes & Villas</span>
              </div>
            </div>

            <div className="box shadow">
              <div className="img">
                <img src={p5} alt="Property" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background: "rgba(255, 152, 0, 0.1)",
                      color: "rgb(255, 152, 0)",
                    }}
                  >
                    For Rent
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>Brick Lane Realty</h4>
                <p>
                  <i className="fa fa-location-dot"></i> 210 Montreal Road, Canada
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">$4,850</button>
                  <span>/sqft</span>
                </div>
                <span>Commercial</span>
              </div>
            </div>

            <div className="box shadow">
              <div className="img">
                <img src={p6} alt="Property" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background: "rgba(37, 181, 121, 0.1)",
                      color: "rgb(37, 181, 121)",
                    }}
                  >
                    For Sale
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>Banyon Tree Realty</h4>
                <p>
                  <i className="fa fa-location-dot"></i> 210 Zirak Road, Canada
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">$2,742</button>
                  <span>/sqft</span>
                </div>
                <span>Apartment</span>
              </div>
            </div>
            </div>
          </div>

      </section>
    </>
  );
};

export default Recent;
