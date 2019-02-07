import React from "react";
import { WindowHelper } from "../components/helpers";

const TandC = ({ heading, content }) => {
  return (
    <WindowHelper>
      {window => (
        <section
          style={{
            padding: "100px 6%",
            overflow: "hidden"
          }}
        >
          <h1
            style={{
              fontWeight: "200",
              textAlign: "center",
              fontSize: "35px",
              lineHeight: "1.5em",
              letterSpacing: "1px"
            }}
          >
            {heading}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </section>
      )}
    </WindowHelper>
  );
};

export default TandC;
