import React, { useEffect, useState, useContext } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context"


export default function LoginForm({ value }) {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    pass: "",
  });

  const {setUserData} = useContext(UserContext)

  const history = useHistory();
  const handleClick = async (e) => {
    e.preventDefault();

    if (!data.email || !data.pass) return;
    const response = await axios.post("/users/login", data);

    console.log("Response is", response);
    if (response.data.success) {
      setUserData({...response.data.user})
      history.push("/home")
    };
  };

  const handleRegister = async () => {
    if (!data.email || !data.pass || !data.name || !data.username) return;
    const response = await axios.post("/users/register", data);

    console.log("Response", response);
  };

  const [loginRegisterActive, setLoginRegisterActive] = useState(value);

  const handleLoginRegisterClick = (arg) => {
    if (arg === loginRegisterActive) return;
    setLoginRegisterActive(arg);
  };

  // console.log("Value is", value);

  return (
    <div style={{ width: "26rem", margin: "auto" }}>
      <MDBTabs pills justify className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleLoginRegisterClick("login")}
            active={loginRegisterActive === "login"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleLoginRegisterClick("register")}
            active={loginRegisterActive === "register"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={loginRegisterActive === "login"}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="text-center mb-3">
              <p>Sign up with:</p>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="google" />
              </MDBBtn>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </div>

            <p className="text-center">or:</p>

            <MDBInput
              className="mb-4"
              type="email"
              id="form7Example1"
              label="Email address"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="form7Example2"
              label="Password"
              value={data.pass}
              onChange={(e) => setData({ ...data, pass: e.target.value })}
            />

            <MDBRow className="mb-4">
              <MDBCol className="d-flex justify-content-center">
                <MDBCheckbox
                  id="form7Example3"
                  label="Remember me"
                  defaultChecked
                />
              </MDBCol>
              <MDBCol>
                <a href="#!">Forgot password?</a>
              </MDBCol>
            </MDBRow>

            <MDBBtn type="submit" className="mb-4" block onClick={handleClick}>
              Sign in
            </MDBBtn>

            <div className="text-center">
              <p>
                Not a member? <a href="#!">Register</a>
              </p>
            </div>
          </form>
        </MDBTabsPane>
        <MDBTabsPane show={loginRegisterActive === "register"}>
          <form>
            <div className="text-center mb-3">
              <p>Sign up with:</p>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="google" />
              </MDBBtn>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </div>

            <p className="text-center">or:</p>

            <MDBInput
              className="mb-4"
              id="form8Example1"
              label="Name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <MDBInput
              className="mb-4"
              id="form8Example2"
              label="Username"
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <MDBInput
              className="mb-4"
              type="email"
              id="form8Example3"
              label="Email address"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="form8Example4"
              label="Password"
              onChange={(e) => setData({ ...data, pass: e.target.value })}
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="form8Example5"
              label="Repeat password"
            />

            <MDBCheckbox
              wrapperClass="d-flex justify-content-center mb-4"
              id="form8Example6"
              label="I have read and agree to the terms"
              defaultChecked
            />

            <MDBBtn
              type="submit"
              className="mb-4"
              block
              onClick={handleRegister}
            >
              Sign up
            </MDBBtn>
          </form>
        </MDBTabsPane>
      </MDBTabsContent>
    </div>
  );
}
