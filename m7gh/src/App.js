import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import GettingHere from "./components/gettinghere/GettingHere";
import Contact from "./components/contact/Contact";
import GuidesGuide from "./components/guidesguide/GuidesGuide";
import Guides from "./components/guides/Guides";
import GuideDetails from "./components/guides/GuideDetails";
import AroundUs from "./components/aroundus/AroundUs";
import About from "./components/about/About";
import Footer from "./components/layout/Footer";
import OurRooms from "./components/ourrooms/OurRooms";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/rooms" component={OurRooms} />

            <Route path="/about" component={About} />
            <Route path="/getting-here" component={GettingHere} />
            <Route path="/around-us" component={AroundUs} />
            <Route exact path="/guides" component={Guides} />
            <Route path="/guides/:id" component={GuideDetails} />
            <Route path="/contact" component={Contact} />
            <Route path="/signup" component={SignUp} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
