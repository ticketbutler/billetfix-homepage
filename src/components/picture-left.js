import React from "react";
import { WindowHelper } from "../components/helpers";

const pictureLeft = ({ heading, strong_text, text }) => {
  return (
    <WindowHelper>
      {window => (
        <section
          style={{
            alignItems: "center",
            boxPack: "justify",
            background: "#f7f7f7",
            padding: "100px 6%",
            ...(window.width > 980
              ? {
                  display: "flex",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between"
                }
              : {
                  display: "block",
                  width: "100%",
                  textAlign: "center"
                })
          }}
        >
          <div style={{ padding: "15px" }}>
            <h3
              style={{
                color: "#ff4a6e",
                margin: ".25em 0",
                fontWeight: "400",
                letterSpacing: "2px",
                ...(window.width > 980
                  ? {
                      fontSize: "30px",
                      lineHeight: "40px",
                      textAlign: "right"
                    }
                  : {
                      textAlign: "left",
                      fontSize: "22px",
                      lineHeight: "27px",
                      fontWeight: "500"
                    })
              }}
            >
              {heading}
            </h3>
            <p
              style={{
                fontWeight: "500",
                padding: "15px 0",

                ...(window.width > 980
                  ? {
                      fontSize: "17px",
                      lineHeight: "17px",
                      textAlign: "right"
                    }
                  : {
                      fontSize: "16px",
                      lineHeight: "16px",
                      textAlign: "left"
                    })
              }}
            >
              {strong_text}
            </p>
            <p
              style={{
                marginTop: "16px",

                fontWeight: "100",
                letterSpacing: "1px",

                ...(window.width > 980
                  ? {
                      fontSize: "17px",
                      lineHeight: "17px",
                      textAlign: "right"
                    }
                  : {
                      fontSize: "16px",
                      lineHeight: "27px",
                      textAlign: "left"
                    })
              }}
            >
              {text}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexFlow: "row wrap ",
              minWidth: "33%",
              padding: "0 10px"
            }}
          >
            {" "}
            <img
              style={{ ...(window.width < 450 ? { width: "85%" } : {}) }}
              src="../img/payment.svg"
              alt="payment "
            />
          </div>
        </section>
      )}
    </WindowHelper>
  );
};

export default pictureLeft;
