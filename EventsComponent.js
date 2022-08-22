import React from "react";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { Button, Carousel } from "react-bootstrap";
import ReactModal from "react-modal";
import testImg from "../../assets/images/eventspage/event1.png";
import "./modal.css";
import { ListGroup } from "react-bootstrap";
import cal from "./cal.svg";
import loc from "./loc2.svg";
import time from "./time.svg";
import info from "./info.svg";



const EventsComponent = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="row hello ">
      <h1></h1>
      </div>
      <div className="event-block">
        <div className="row">
          <div className="col-lg-2 sec-1">
            <table>
              <tr>
                <td>
                  {/* <div className="date">{props.events.year}</div> */}
                  <div className="month">{new Date(props.events.year,props.events.month-1).toLocaleString('default', { month: 'short' })}</div>
                  <div className="month-date-devider"></div>
                  <div className="date">{props.events.date}</div>
                </td>
                <td className="title">{props.events.title}</td>
              </tr>
            </table>
          </div>
          <div className="col-lg-5 sec-2">
            <img src={props.events.img} style={{height:"22rem"}} />
          </div>
          <div className="col-lg-5 sec-3">
            <div className="title">{props.events.title}</div>

            <div className="sort-story">{props.events.eventInfo}</div>
            <div className="group-of-btn">
              <Button variant="primary" onClick={() => setShow(true)}>
                Know more
              </Button>
              <Modal
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-custom-modal-styling-title"
                centered={true}
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Event Name
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="model-Content">
                    <div className="modal-img-sec">
                      <Carousel>
                        {/* {console.log(props.events.images)} */}
                        {props.events.images.map((img)=>
                        (<Carousel.Item>
                          <img className="modal-img" src={img.image} style={{maxHeight:"500px"}} alt="" />
                        </Carousel.Item>)
                        )}
                        
                      </Carousel>
                    </div>
                    <div className="modal-txt-sec">
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <span>
                            <img src={cal} alt="" />
                          </span>
                          Date: {props.events.date}-{new Date(props.events.year,props.events.month-1).toLocaleString('default', { month: 'long' })}-{props.events.year}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <img src={time} alt="" />
                          </span>
                          Time : 2:30 PM
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <img src={loc} alt="" />
                          </span>
                          Venue : {props.events.venue}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span>
                            <img src={info} alt="" />
                          </span>
                          Description : {props.events.eventInfo}
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsComponent;
