import "./App.css";
import React, { useState, useEffect, createRef } from "react";
import "animate.css";
import HeaderQuickConnects from "./components/HeaderQuickConnects";
import NavigationIconsHeader from "./components/NavigationIcons_Header";
import NavigationIconsFooter from "./components/NavigationIcons_Footer";
import FromTumblrToReactHeaderImage from "./FromTumblrToReact_Header-Image/FromTumblrToReact_Header-Image";
import TumblrToReact from "./components/TumblrToReact";

function App() {
  const [data] = useState(require("./captions-and-images.json"));
  const [itemRefs, setItemRefs] = useState([]);

  useEffect(() => {
    setItemRefs(data.map(() => createRef()));
  }, [data]);

  const scrollToTop = () => {
    itemRefs[0]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBottom = () => {
    const lastRef = itemRefs[itemRefs.length - 1];
    lastRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRandom = () => {
    const randomIndex = Math.floor(Math.random() * itemRefs.length);
    itemRefs[randomIndex]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <HeaderQuickConnects />
      <NavigationIconsHeader
        onGoToBottom={scrollToBottom}
        onRandomSelect={scrollToRandom}
      />
      <FromTumblrToReactHeaderImage />
      <p className="titleMyName">Jonathan Schimpf</p>
      <TumblrToReact data={data} itemRefs={itemRefs} />
      <NavigationIconsFooter
        onGoToTop={scrollToTop}
        onRandomSelect={scrollToRandom}
      />
    </div>
  );
}

export default App;
