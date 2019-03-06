import React from "react";
import { Attendee } from "./icons/attendeeIcon";

import { WindowHelper } from "../components/helpers";

const PictureRightSecond = ({ heading, strong_text, text }) => {
  return (
    <WindowHelper>
      {window => (
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
            background: "#fff",

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
                      fontSize: "20px",
                      lineHeight: "25px"
                    })
              }}
            >
              {heading}
            </h3>

            <p
              style={{
                fontWeight: "500",
                padding: "10px 0",

                ...(window.width > 980
                  ? {
                      fontSize: "18px",
                      lineHeight: "28px"
                    }
                  : {
                      fontSize: "16px",
                      lineHeight: "16px"
                    })
              }}
            >
              {strong_text}
            </p>
            <p
              style={{
                marginTop: "10px",
                fontWeight: "100",
                letterSpacing: "1px",

                ...(window.width > 980
                  ? {
                      fontSize: "17px",
                      lineHeight: "25px"
                    }
                  : {
                      fontSize: "16px",
                      lineHeight: "27px"
                    })
              }}
            >
              {text}
            </p>
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
            <Attendee />
          </div>
        </section>
      )}
    </WindowHelper>
  );
};
export default PictureRightSecond;
