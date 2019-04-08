import React from "react";
import { render, hydrate } from "react-dom";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router, Link } from "@reach/router";

function App() {
  return (
    <Root>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  );
}

// Default expert for static rendering
export default App;
