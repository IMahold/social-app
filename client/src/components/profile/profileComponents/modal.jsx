import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
} from "mdb-react-ui-kit";
import Edit from "../edit";

export default function Modal({
  children,
  toggleShow,
  basicModal,
  setBasicModal,
}) {
 
  return (
      <MDBModal
        show={basicModal}
        setShow={setBasicModal}
        tabIndex="-1"
        scrollable
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalBody>
              {{ ...children }}
              {/* <MDBBtn
                // className="btn-close"
                // color="none"
                className="d-inline"
                onClick={() => setScrollableModal(!scrollableModal)}
              >
                Cancel
              </MDBBtn> */}
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

  );
}
