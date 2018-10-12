import React, { Component } from "react";
import GettingHere from "../gettinghere/GettingHere";
//import Contact from "./components/contact/Contact";
//import GuidesGuide from "./components/guidesguide/GuidesGuide";
import AroundUs from "../aroundus/AroundUs";
import About from "../about/About";
//import About from "./components/about/About";
import OurRooms from "../ourrooms/OurRooms";

const Home = () => {
  return (
    <div class="home container">
      <h4 class="center">Home</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere minima
        fuga, esse fugiat eos nihil nostrum impedit asperiores eligendi
        quisquam. Harum, impedit? Delectus laudantium dicta, accusantium a
        quisquam iste distinctio?
      </p>
      <OurRooms />
      <AroundUs />
      <GettingHere />
      <h5 className="container">Visitor's Corner - coming soon!</h5>
    </div>
  );
};
/*
export class Home extends Component {
  render() {
    return (
      <div class="home container">
        <p>Home Page</p>
      </div>
    );
  }
}
*/
export default Home;
