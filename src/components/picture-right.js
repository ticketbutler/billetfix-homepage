import React from "react";
import { SmileyHiIcon } from "./icons/smileyHiIcon";

import { WindowHelper } from "../components/helpers";

const PictureRight = ({ heading, texts }) => {
  return (
    <WindowHelper>
      {window => (
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
            background: "#f7f7f7",
            padding: "100px 6%",
            position: "relative"
          }}
          id="teaser"
        >
          <div
            style={{
              padding: "0 10px",
              ...(window.width > 980
                ? {
                    maxWidth: "50%",
                    minWidth: "33%"
                  }
                : {
                    width: "100%"
                  })
            }}
            className="details"
          >
            <h3
              style={{
                fontSize: "30px",
                letterSpacing: "3px",
                lineHeight: "1.2em",
                margin: ".25em 0",
                color: "#ff4a6e",
                fontWeight: "400",

                ...(window.width > 980
                  ? {
                      fontSize: "30px",
                      lineHeight: "40px"
                    }
                  : window.widht > 450
                  ? {
                      fontSize: "22px",
                      lineHeight: "27px"
                    }
                  : {
                      fontSize: "21px",
                      lineHeight: "26px",
                      fontWeight: "500"
                    })
              }}
            >
              {heading}
            </h3>

            {texts.map(text => (
              <p
                style={{
                  lineHeight: "25px",
                  letterSpacing: "2px",
                  marginTop: "16px",
                  fontSize: "17px",
                  color: "#333",
                  fontWeight: "100"
                }}
              >
                {text}
              </p>
            ))}
          </div>
          <div
            className="icon"
            style={{
              minWidth: "33%",
              padding: "0 10px",

              ...(window.width > 680
                ? {}
                : {
                    display: "none"
                  })
            }}
          >
            <SmileyHiIcon />
          </div>
        </section>
      )}
    </WindowHelper>
  );
};
export default PictureRight;
