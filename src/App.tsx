import React, { useEffect } from "react";
import Main from "./components/Main";
import Achievements from "./components/Achievements";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="main-container">
      <FadeIn transitionDuration={700}>
        <Main />
        <Achievements />
        <Experience />
        <Expertise />
        <Timeline />
        <Contact />
      </FadeIn>
    </div>
  );
}

export default App;