import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link,useLocation } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomeComponent from "./pages/HomePage/HomeComponent";
import CouncilComponent from './pages/CouncilPage/CouncilComponent'
import EventWorkshopComponent from './pages/EventWorkshopPage/EventWorkshopComponent'
import AboutComponent from './pages/AboutPage/AboutComponent'
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      
         
    <Router>
          <div className="content">
            <div className='NAV'>
            <NavbarComponent/>
            </div>
            <Switch>
              <Route exact path="/">
                <HomeComponent />
              </Route>
              <Route path="/home">
                <HomeComponent />
              </Route>
              <Route path="/team">
               <CouncilComponent/>
              </Route>
              <Route path="/events">
               <EventWorkshopComponent/>
              </Route> 
              <Route path="/about">
                <AboutComponent/>
              </Route>
             
      
            </Switch>
          </div>
         
        </Router>
        <FooterComponent/>

    </div>
  );
}

export default App;
