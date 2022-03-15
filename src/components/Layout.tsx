import React from "react";

export default function Layout({ children }: any) {
  return (
    <>
      <div className="main-container container-fluid">{children}</div>
    </>
  );
}
