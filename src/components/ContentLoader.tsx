import React from "react";
import CSS from "csstype";

export default function ContentLoader() {
  const styles: CSS.Properties = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 3,
    background: "#fff",
  };

  return (
    <div className="content-loader df ai-center jc-center" style={styles}>
      <div
        className="spinner-border spinner-border-sm spinner"
        style={{ zIndex: 1 }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
