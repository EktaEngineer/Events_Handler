import React from "react";
import "./AboutPage.css";
import { FaRegFlag } from "react-icons/fa";
import trial from './trial.svg'
import trial2 from './trial2.svg'
import trial3 from './trial3.svg'
import whatwedo from './whatwedo.svg'
import TypewriterComponent from "typewriter-effect";
import trial4 from './trial4.png'
import work from './work.png'
const AboutComponent = () => {
  return (
    <div>
      <div class="AboutDiv">
        {/* <h1 style={{textAlign:"Center"}}>About Us</h1><br/> */}
        <br />
        {/* <TypewriterComponent className="Typewriter"
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString('" When you are inspired by some great purpose, extraordinary project, all your thoughts break their bonds. "')
         
       .pauseFor(500)
       .changeDelay(30)
       .start();
       }}
       /> */}
        <h3 style={{ textAlign: "Center"}}>
          “When you are inspired by some great purpose, extraordinary
          <br /> project, all your thoughts break their bonds”.
        </h3>
        <br />
        <div class="AboutContainer">
          <div class="logo logo-left">
            <div class="fa fa-flag-o fa-4x">
              <img src={trial} alt="" className="size62" />
            </div>
          </div>
          <p class="title title-left">What is E-Cell?</p>
          <div class="text">
            <p>
              {" "}
              VESIT E-Cell is an organization that aims to help you navigate
              through the constantly evolving world of entrepreneurship and
              StartUp culture. In our quest to promote the spirit of
              entrepreneurship among the community, we guide you towards
              essential questions like “How this realm of entrepreneurship
              affects us in our day-to-day lives?” and the likes of “Can I
              construct my StartUp idea into a functional business model?”
            </p>
            <p>
              {" "}
              As you embark on a journey to find answers to this Question, we
              tap into your inner potential and seek to refine it with the
              organisational experience, knowledge and strong skill set.
            </p>
          </div>
        </div>
        <div class="AboutContainer">
          <p class="title title-right">What we do?</p>
          <div class="logo logo-right">
            <div class="fa fa-group fa-4x">
            <img src={whatwedo} alt="" className="size62" />
            </div>
          </div>
          <div class="text">
            <p>
              “THE ENTREPRENEUR ALWAYS SEARCHES FOR CHANGE, RESPONDS TO IT, AND
              EXPLOITS IT AS AN OPPORTUNITY.”
              <br />
              To instil this very essence, throughout the year, E-Cell organizes
              various seminars/webinars, lectures, innovative games,
              brainstorming sessions, competitions which is crucial in grooming
              a new generation of young entrepreneurs.
            </p>
            <p>
              {" "}
              At the same time, efforts are made to invoke a sense of
              responsibility towards the nation in students by empowering social
              StartUps as well. Not only do we inspire you to take the leap of
              faith, but we also train and armorize you for it, guide you
              through it and are ready for further leaps.
            </p>
          </div>
        </div>
        <div class="AboutContainer">
          <p class="title title-left">WorkCulture</p>
          <div class="logo logo-left">
            <div class="fa fa-comments-o fa-4x">
            <img src={work} alt="" className="size62" />
            </div>
          </div>
          <div class="text">
            <p>
              A company’s work culture is its overall personality. It’s a
              combination of a variety of elements that create an intangible
              ecosystem where people can work to the best of their capabilities
              and creative skills.At VESIT E-Cell we have an impressive work
              culture with clear communication, efficient teamwork, and
              achievable goals which adds up eventually to immense personal and
              professional growth.{" "}
            </p>
            <p>
              The work atmosphere is extremely positive where communication is
              hierarchical, all the team members are supportive and uplift each
              other, and all members’ input is appreciated and noted.
            </p>
          </div>
        </div>
        <div class="AboutContainer">
          <div class="logo logo-right">
            <div class="fa fa-line-chart fa-4x">
            <img src={trial2} alt="" className="size62" />
            </div>
          </div>
          <p class="title title-right">Vision</p>
          <div class="text">
            <p>
              VESIT Entrepreneurship Cell’s vision :<br />
              "To Nurture Entrepreneurial skills among VESITians and to increase
              the number of StartUps from VESIT."
            </p>
            <p>
              We are on a mission to build a sustainable StartUp ecosystem,
              fostering entrepreneurial knowledge and providing opportunities
              for StartUps, colleges, and corporates to get involved with us.
            </p>
          </div>
        </div>
      </div>

      <section className="feedback">


      <div class="container container-2 feedback-form ">
        <form>
          <div class="d-flex flex-column align-items-center">
            <p class="fs-4 fw-bold m-0 mt-4">Feedback</p>{" "}
            <span class="text-muted">
            Please share your valuable feedback with us.
            </span>{" "}
            <span class="line my-3"></span>
          </div>


          <div class="row p-0">
            <div class="col-12 p-0 px-4">
              {" "}
              <span class="text-uppercase text-muted">
                Email
              </span>{" "}
            </div>
            <div class="col-12 p-0 px-4">
              {" "}
              
              <input type="email" class="form-control d-flex align-items-center my-2"  placeholder="name@example.com"/>
            </div>
            <div class="col-12 p-0 px-4">
              {" "}
              <span class="text-uppercase text-muted"  placeholder="My experiance with ECell VESIT">Message</span>{" "}
            </div>
            <div class="col-12 p-0 px-4">
              {" "}
              <textarea class="form-control d-flex align-items-center my-2" rows="3"></textarea>{" "}
            </div>
            <div class="col-12 p-0 px-4">
              <div class="d-flex align-items-center my-3">
                {" "}
               
              </div>
            </div>
            <div class="col-12 p-0 px-4">
              <div class="btn btn-primary w-100">SUBMIT</div>
              <div class="text-muted text-center mb-4 mt-3">
                Thank You for your feedback!!
              </div>
            </div>
          </div>
        </form>
      </div>
     
      <iframe
        className="map-iframe"
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://www.google.com/maps/embed/v1/search?q=Vivekanand+Education+Society's+Institute+Of+Technology,+कलेक्टर+कॉलोनी,+Chembur,+Mumbai,+Maharashtra,+India&key=AIzaSyDmc-vHGSDPALjZpYDekUJfCHeiBJU4piI"
      >

     
      </iframe>
      </section>



    </div>
  );
};

export default AboutComponent;
