import React, { useEffect, useState } from "react";
import axios from "axios";
import "./event.css";
import { Carousel } from "react-bootstrap";
// import CarouselImg1 from "../../assets/images/eventspage/carousel1.png";
// import CarouselImg2 from "../../assets/images/eventspage/carousel2.png";
import Typewriter from "typewriter-effect";
import EventsComponent from "./EventsComponent";
import event1 from "../../assets/images/eventspage/event1.png";
import event2 from "../../assets/images/eventspage/event2.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const EventWorkshopComponent = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [years, setYear] = useState([]);
  const [Currentyear, setCurrentYear] = useState();
  useEffect( () => {
    let bigCities = data.filter(city => city.year == Currentyear);
    setData1(bigCities);
  }, [Currentyear]);
  useEffect(async () => {
    const evtData = await axios.get("http://localhost:8000/post/");
    const pastEvt = evtData.data.map((evt) => ({
      year: evt.date.split("-")[0],
      month: evt.date.split("-")[1],
      date: evt.date.split("-")[2],
      title: evt.title,
      eventInfo: evt.eventInfo,
      img: evt.poster,
      venue: evt.venue,
      images: evt.post,
    }));
    const unique = [...new Set(pastEvt.map(item => item.year))]; // [ 'A', 'B']
    setData(pastEvt);

    setYear(unique)
    setCurrentYear(unique[0])
  }, []);
  

  

  return (
    <div>
      <div className="page-event">
        <div className="cover">
          <div className="heading">EVENTS</div>
        </div>
        <div className="events-container">
          <div className="upcoming-sec">
            <div className="flex-row">
              <div className="heading">Previous Events</div>

              <Dropdown className="d-inline mx-2 right rsp">
                <Dropdown.Toggle
                  id="dropdown-autoclose-true"
                  className="rsp"
                  style={{ Background: "black" }}
                >
                Year -  {Currentyear}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {years.map((year)=>(
                  <Dropdown.Item onClick={()=>setCurrentYear(year)}>Year - {year}</Dropdown.Item>
                  ))}
                  </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="upcoming-event-list">
            <Carousel fade>
              {data1.map((e) => {
                return (
                  <Carousel.Item>
                    <EventsComponent events={e} />
                  </Carousel.Item>
                );
              })}

              {/* <Carousel.Item>
                <EventsComponent />
              </Carousel.Item> */}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventWorkshopComponent;
