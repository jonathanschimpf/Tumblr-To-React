import "./App.css";
import React, { useRef } from "react";
import HeaderQuickConnects from "./components/HeaderQuickConnects";
import TumblrToReact from "./components/TumblrToReact";
import NavigationIcons_Header from "./components/NavigationIcons_Header";
import FromTumblrToReact_HeaderImage from "./FromTumblrToReact_Header-Image/FromTumblrToReact_Header-Image";
import NavigationIcons_Footer from "./components/NavigationIcons_Footer";

function App() {
  // Import data
  const data = require("./captions-and-images.json");
  const itemRefs = useRef(data.map(() => React.createRef()));

  // Function to scroll to the first item
  const scrollToTop = () => {
    itemRefs.current[0].current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to the last item
  const scrollToBottom = () => {
    const lastItemIndex = itemRefs.current.length - 1;
    itemRefs.current[lastItemIndex].current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to a random item
  const scrollToRandom = () => {
    const randomIndex = Math.floor(Math.random() * itemRefs.current.length);
    itemRefs.current[randomIndex].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <HeaderQuickConnects />
      <NavigationIcons_Header onGoToBottom={scrollToBottom} onRandomSelect={scrollToRandom} />
      <FromTumblrToReact_HeaderImage />
      <p className="titleMyName">Jonathan Schimpf</p>
      <TumblrToReact data={data} itemRefs={itemRefs} /> {/* Pass data here */}
      <NavigationIcons_Footer onGoToTop={scrollToTop} onRandomSelect={scrollToRandom} />
    </div>
  );
}

export default App;
