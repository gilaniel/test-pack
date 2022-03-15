import React from "react";

import { Modal, ModalBody, ModalFooter, ModalTitle } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

const ModalItem = ({
  children,
  title = "",
  show = false,
  onHide,
  create,
  footer = false,
  className = "",
}: any) => {
  return (
    <Modal
      show={show}
      animation={false}
      onHide={onHide}
      dialogClassName={create ? "big-modal" : className}
    >
      {!create && (
        <ModalHeader closeButton>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
      )}

      <ModalBody>{children}</ModalBody>

      {!create && footer && <ModalFooter></ModalFooter>}
    </Modal>
  );
};

export default ModalItem;
