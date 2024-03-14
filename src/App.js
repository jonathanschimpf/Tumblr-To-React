import "./App.css";
import React, { useState, useEffect } from "react";
import { WOW } from 'wowjs';
import 'animate.css';
import HeaderQuickConnects from "./components/HeaderQuickConnects";
import TumblrToReact from "./components/TumblrToReact";
import NavigationIcons_Header from "./components/NavigationIcons_Header";
import FromTumblrToReact_HeaderImage from "./FromTumblrToReact_Header-Image/FromTumblrToReact_Header-Image";
import NavigationIcons_Footer from "./components/NavigationIcons_Footer";

function App() {
  const [data, setData] = useState(require("./captions-and-images.json"));
  const [itemRefs, setItemRefs] = useState([]);

  useEffect(() => {
    setItemRefs(data.map(() => React.createRef()));

    const wow = new WOW({
      live: false
    });
    wow.init();

    // Return a cleanup function
    return () => wow.sync();
  }, [data]);

  const scrollToTop = () => {
    if (itemRefs[0]?.current) {
      itemRefs[0].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBottom = () => {
    const lastItemIndex = itemRefs.length - 1;
    if (itemRefs[lastItemIndex]?.current) {
      itemRefs[lastItemIndex].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToRandom = () => {
    const randomIndex = Math.floor(Math.random() * itemRefs.length);
    if (itemRefs[randomIndex]?.current) {
      itemRefs[randomIndex].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <HeaderQuickConnects />
      <NavigationIcons_Header onGoToBottom={scrollToBottom} onRandomSelect={scrollToRandom} />
      <FromTumblrToReact_HeaderImage />
      <p className="titleMyName">Jonathan Schimpf</p>
      <TumblrToReact data={data} itemRefs={itemRefs} />
      <NavigationIcons_Footer onGoToTop={scrollToTop} onRandomSelect={scrollToRandom} />
    </div>
  );
}

export default App;
