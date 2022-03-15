import React from "react";

import { Toast } from "react-bootstrap";

export default function Toasts({ classNames, text, onClose, show }: any) {
  return (
    <Toast
      show={show}
      className={classNames}
      onClick={() => {
        onClose();
      }}
    >
      {/* <Toast.Header>
        <strong className="mr-auto">CRM</strong>
      </Toast.Header> */}
      <Toast.Body>{text}</Toast.Body>
    </Toast>
  );
}
