import React from "react";
import { WindowHelper } from "../components/helpers";

const Languages = ({ heading, strong_text }) => {
  return (
    <WindowHelper>
      {window => (
        <section
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
            background: "#fff",
            padding: "100px 6%",
            position: "relative",
            ...(window.width > 980
              ? {
                  display: "flex"
                }
              : {})
          }}
          id="teaser"
        >
          <div
            style={{
              padding: "15px",
              ...(window.width > 980
                ? {
                    maxWidth: "45%"
                  }
                : {})
            }}
          >
            <h3
              style={{
                color: "#ff4a6e",
                margin: ".25em 0",
                fontWeight: "400",
                letterSpacing: "2px",
                ...(window.width > 980
                  ? {
                      fontSize: "30px",
                      lineHeight: "40px"
                    }
                  : {
                      fontSize: "22px",
                      lineHeight: "27px"
                    })
              }}
            >
              {heading}
            </h3>

            <p
              style={{
                fontWeight: "500",
                padding: "15px 0",

                fontSize: "18px",
                lineHeight: "17px",
                ...(window.width > 980
                  ? {
                      fontSize: "18px",
                      lineHeight: "17px"
                    }
                  : {
                      fontSize: "16px",
                      lineHeight: "16px"
                    })
              }}
            >
              {strong_text}
            </p>
          </div>
          <div
            className="icon"
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "33%",
              padding: "0 10px"

              // ...(window.width > 680
              //   ? {}
              //   : {
              //       ,
              //     }),
            }}
          >
            <a href="/en">
              <img
                alt="english-icon"
                src={require("../assets/img/englishFlag.svg")}
                style={{
                  height: "auto",
                  ...(window.width > 980
                    ? {
                        width: "130px"
                      }
                    : {
                        width: "70px"
                      })
                }}
              />
            </a>
            <span
              style={{
                margin: "10px",
                fontSize: "120px",
                ...(window.width > 980
                  ? {
                      fontSize: "120px"
                    }
                  : {
                      fontSize: "70px"
                    })
              }}
            >
              /
            </span>
            <a href="/da">
              <img
                alt="danish-flag"
                src={require("../assets/img/danishFlag.svg")}
                style={{
                  height: "auto",
                  ...(window.width > 980
                    ? {
                        width: "130px"
                      }
                    : {
                        width: "70px"
                      })
                }}
              />
            </a>
          </div>
        </section>
      )}
    </WindowHelper>
  );
};
export default Languages;
