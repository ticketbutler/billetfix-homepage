import React from "react";
import { WindowHelper } from "../components/helpers";
const Partners = ({ images }) => (
  <WindowHelper>
    {window => (
      <section>
        <div
          style={{
            display: "flex",
            background: "#fff",
            zIndex: "1",
            flexFlow: "row wrap",
            width: "100%",
            justifyContent: "space-around",

            ...(window.width > 980 ? { padding: "32px" } : { padding: "35px" })
          }}
        >
          {images.map(img => (
            <a target="_blank" rel="noopener noreferrer" href={img.href}>
              <img
                alt="partners-logo"
                style={{
                  objectFit: "contain",
                  maxHeight: "80px",
                  maxWidth: "192px",
                  padding: "16px",
                  filter: "grayscale(100%)"
                }}
                src={img.src}
              />
            </a>
          ))}
        </div>
      </section>
    )}
  </WindowHelper>
);

export default Partners;
