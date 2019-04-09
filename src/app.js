import React from "react";
import { render, hydrate } from "react-dom";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router, Link, LocationProvider } from "@reach/router";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";

function App() {
  return (
    <Root>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
      <LocationProvider>
        {({ location }) => {
          if (typeof window !== "undefined") {
            // Google analytics
            ReactGA.initialize("UA-70000511-1");
            ReactGA.pageview(location.pathname);
            // Facebook pixel
            ReactPixel.init("219644851800920");
            ReactPixel.pageView();
            return null;
          }
        }}
      </LocationProvider>
    </Root>
  );
}

// Default expert for static rendering
export default App;
