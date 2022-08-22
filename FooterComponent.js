import React from 'react'
import github from '../assets/images/social/github.png'
import ln from '../assets/images/social/linkedin.png'
import insta from '../assets/images/social/insta.png'
import gmail from '../assets/images/social/gmail.png'

const FooterComponent = () => {
  return (
    <>
      <div class="footer">
        <div class="footerContainer">
          <div class="row">
            <div class="footer-content">
              <div class="footer-col first">
                <h6>About E-CELL</h6>
                <p class="p-small">
                  E-Cell was established with the purpose of inspiring and motivating students to take up entrepreneurship and help them build their startups,thus grooming a new generation of young entrepreneurs .
                </p>
              </div>

              <div class="footer-col second">
                <h6>Address</h6>
                <ul class="list-unstyled li-space-lg p-small">
                  <li>
                    Hashu Adwani Memorial Complex, Collector's Colony,
                  </li>
                  <li>
                    Chembur, Mumbai,
                  </li>
                  <li>
                    Maharashtra 400074
                  </li>
                </ul>
              </div>

              <div class="footer-col third">
              <span class="fa-stack">
                  <a href="mailto:ecell.vesit@ves.ac.in">
                    <img src={gmail} alt="" style={{ width: "37px", marginRight:"6px" }} />
                  </a>
                </span>

                <span class="fa-stack">
                  <a  href="https://www.linkedin.com/company/vesit-e-cell/" target="_app">

                    <img src={ln} alt="" style={{ width: "37px" }} />
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="https://www.instagram.com/vesit_ecell/?hl=en" target="_app">

                    <img src={insta} alt="" style={{ width: "41px" }} />
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="https://github.com/E-Cell-Website" target="_app" >
                    <img src={github} alt="" style={{ borderRadius: "50%", width: "41px" }} />
                  </a>
                </span>
                <p class="p-small">
                  We would love to hear from you
                  <a href="mailto:ecell.vesit@ves.ac.in"
                  ><strong> ecell.vesit@ves.ac.in</strong></a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright" >
        <div class="footerContainer">
          <div class="row">
            <div class="col-lg-12">
              <p class="p-small">
                Copyright © E-CELL VESIT
              </p>
            </div>

            <div class="col-lg-12">
              <p class="p-small">
                Distributed by : <a href="https://themewagon.com/"> Lorem</a>
              </p>
            </div>

          </div>

        </div>

      </div>

    </>


  )
}

export default FooterComponent
