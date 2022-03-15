import React from "react";
import Logo from "../img/logo.svg";
import classNames from "classnames";

export default function Loader() {
  return (
    <div
      className={classNames("main-loader", "df", "ai-center", "jc-center", {
        show: true,
      })}
    >
      <div className="relative">
        <img src={Logo} alt="" />
        <div className="spinner-border spinner-border-sm spinner" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
