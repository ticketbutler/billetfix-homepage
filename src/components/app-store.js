import React from "react";

import { WindowHelper } from "../components/helpers";

const AppStore = ({ heading, text }) => {
  return (
    <WindowHelper>
      {window => (
        <section
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
            background: "#f3f3f3",
            padding: "100px 6%",
            position: "relative",
            ...(window.width > 680 ? { display: "flex" } : { display: "block" })
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
                fontWeight: "100",

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
                lineHeight: "30px",
                letterSpacing: "2px",
                marginTop: 16,
                fontSize: "18px",
                color: "#333",
                fontWeight: "100"
              }}
            >
              {text}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://itunes.apple.com/dk/app/billetfix/id1281261719"
            >
              <img
                style={{ height: "60px" }}
                src={require("../assets/img/app-store.png")}
                alt="app-store-icon"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://play.google.com/store/apps/details?id=com.billetfix"
            >
              <img
                style={{
                  height: "61px",
                  ...(window.width > 980 ? { marginLeft: "5px" } : {})
                }}
                src={require("../assets/img/google-play.png")}
                alt="app-store-icon"
              />
            </a>
          </div>
          <div
            className="mockup"
            style={{
              minWidth: "33%",
              padding: "0 10px"
            }}
          >
            <img
              src={require("../assets/img/mobile-mockup.png")}
              alt="mobile-mockup "
            />
          </div>
        </section>
      )}
    </WindowHelper>
  );
};

export default AppStore;
