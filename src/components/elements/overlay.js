import React from 'react'
export const Overlay = ({
  backgroundColor = "rgba(0, 0, 0, .5)",
  style = {},
  children,
  ...props
}) => {
 
  return (
    <div
      style={{ position: "relative", overflow: "hidden", ...style }}
      {...props}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor
        }}
      >
        {children && children}
      </div>
    </div>
  );
};