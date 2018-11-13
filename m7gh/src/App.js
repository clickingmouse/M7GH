import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import GettingHere from "./components/gettinghere/GettingHere";
import Contact from "./components/contact/Contact";
import GuidesGuide from "./components/guidesguide/GuidesGuide";
import Guides from "./components/guides/Guides";

import AroundUs from "./components/aroundus/AroundUs";
import About from "./components/about/About";
import Footer from "./components/layout/Footer";
import OurRooms from "./components/ourrooms/OurRooms";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/home" component={Home} />
          <Route path="/rooms" component={OurRooms} />

          <Route path="/about" component={About} />
          <Route path="/getting-here" component={GettingHere} />
          <Route path="/around-us" component={AroundUs} />
          <Route path="/guides" component={Guides} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
