import React, { useState } from "react";
import "./login-page.css";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
} from "mdb-react-ui-kit";

import LoginForm from "./LoginForm";

export default function LoginPage() {
  const [popoverModal, setPopoverModal] = useState(false);
  const [signUp, setSignup] = useState("register");

  const handleLoginString = (arg) => {
    setSignup(arg);
  };

  const toggleShow = () => setPopoverModal(!popoverModal);

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="login-content">
      <i className="fab fa-3x fa-earlybirds"></i>
        <h1>Happening now</h1>
        <div className="small-container">
          <h2>Join Hooter today.</h2>

          <div>
            <MDBBtn
              onClick={() => {
                handleLoginString("register");
                toggleShow();
              }}
              type="submit"
              className="mb-4"
              block
            >
              Sign up
            </MDBBtn>
            <p className="p-blue">
              By signing up, you agree to the <span> Terms of Service </span>{" "}
              and <span>Privacy Policy </span>, including{" "}
              <span>Cookie Use.</span>
            </p>
          </div>

          <div>
            <p className="p-bold">Already have an account?</p>

            <MDBBtn
              onClick={() => {
                handleLoginString("login");
                toggleShow();
              }}
              type="submit"
              className="mb-4"
              block
            >
              Sign in
            </MDBBtn>

            {popoverModal ? (
              <MDBModal show={popoverModal} setShow={setPopoverModal}>
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalBody>
                      <LoginForm value={signUp} />
                    </MDBModalBody>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
