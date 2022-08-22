import React,{ useEffect,useState } from 'react'
import axios from 'axios';
import Tagline from "./Tagline.png"
import Tree from "./Tree.png"
import ModalImage from "react-modal-image";
import "./HomePage.css"
// const data = [
//     { yearMonth: "Jan 2022", eventData: [{ month: "Jan", day: "2", year: "2022", eventTitle: "Wantrepreneurs Meet", description: "A wantrepreneur is a person who aspires to be an entrepreneur, especially one who never realizes this ambition.", speaker: "Mr Amit Singh" }, { month: "Jan", day: "22", year: "2022", eventTitle: "Wantrepreneurs Meet", description: "A wantrepreneur is a person who aspires to be an entrepreneur, especially one who never realizes this ambition.", speaker: "Mr Amit Singh" }] },
//     { yearMonth: "Feb 2022", eventData: [{ month: "Feb", day: "2", year: "2022", eventTitle: "Wantrepreneurs Meet", description: "A wantrepreneur is a person who aspires to be an entrepreneur, especially one who never realizes this ambition.", speaker: "Mr Amit Singh" }, { month: "Feb", day: "22", year: "2022", eventTitle: "Wantrepreneurs Meet", description: "A wantrepreneur is a person who aspires to be an entrepreneur, especially one who never realizes this ambition.", speaker: "Mr Amit Singh" }] }
// ]
const HomeComponent = () => {
    const[data,setData]=useState([])
    useEffect(async() => {
    const evtData=await axios.get("http://localhost:8000/UpcomingEventList/")
    
    const upcomingEvt =evtData.data.map(({
        ...evt
    })=>({...evt,day:evt.date.split("-")[2],month:evt.date.split("-")[1],year:evt.date.split("-")[0]}))
    
    const result = Object.values(upcomingEvt.reduce( (acc,evt) => {
        const key = `${evt.year}-${evt.month}`;
        if(!acc[key]) {
          acc[key] = {year: evt.year, month: evt.month, eventData:[]}
        }
        acc[key].eventData.push( {eventTitle:evt.eventTitle,description:evt.description,speaker:evt.speaker,image:evt.upload,year:evt.year,month:evt.month,day:evt.day,date:evt.date} );
        return acc;
    },{}));
    console.log(result)
    setData(result);
     }, [])
    
    return (
        < div className="firstClass" >
            <div className="mainDiv">
                <img className="bg_img" src={Tree}></img>
                <div className="homePage">
                    <img className="image" src={Tagline}></img>
                    <p>"To Nurture Entrepreneurial skills among VESITians and to increase the number of StartUps from VESIT"</p>
                </div>
            </div>


            < div className="homeContainer">
                <h1>Upcoming Events!!</h1>
                {/* <!-- TIMELINE --> */}
                {data.map((eventD) =>

                    <div>
                        < div className="spacer-toc" > <i className="fa fa-calendar"></i></div >
                        <h2 className="border-line">{eventD.year} {new Date(eventD.year,eventD.month-1).toLocaleString('default', { month: 'long' })}</h2>

                        {/* <!-- 2020 --> */}
                       

                        < div className="eventWrapper" >
    
                            { 
                                eventD.eventData.map((event) =>
                                    <div className="event">
                                        <div className="event--img">
                                            <ModalImage small={event.image} large={event.image}/>
                                        </div>
                                        <div className="event--date"><span>{new Date(event.year,event.month-1).toLocaleString('default', { month: 'short' })}</span><span>{event.day}</span><span>{event.year}</span></div>
                                        <div className="event--content">
                                            <h2>{event.eventTitle}</h2><br></br>
                                            <p className="event--content-desc">{event.description}</p><br></br>
                                            <p className="event--content-speaker">{event.speaker}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        {/* <!-- end eventWrapper  --> */}

                        <div className="wsite-spacer" style={{ height: "3rem" }}></div>
                    </div>)}
            </div >
        </div >
    )
}

export default HomeComponent