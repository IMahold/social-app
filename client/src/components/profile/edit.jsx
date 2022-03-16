import { useEffect, useState } from "react";
import { MDBContainer, MDBRipple, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import Inputs from "./profileComponents/inputs";
import { Link } from "react-router-dom";

export default function Edit({
  userData,
  data,
  fileUrl,
  setData,
  handleImageChange,
  handleSave,
  close,
}) {
  return (
    <MDBContainer className="main">
      <div className="modalButtonContainer ">
        {/* <MDBBtn
          // className="btn-close"
          color="danger"
          className="d-inline"
          onClick={() => close()}
        >
          Cancel
        </MDBBtn> */}
        <MDBBtn
          className="btn-close ms-4"
          color="none"
          // className="d-inline"
          onClick={() => close()}
        />
        <span  >Edit Profile</span>
        <MDBBtn
          onClick={handleSave}
          className="modalButton text-light w-75"
          size="sm"
          color='dark'
          // onClick={func}
        >
          Save profile
        </MDBBtn>
      </div>

      <div className="imageModalContainer">
        {/* // <label htmlFor="file" style={{ cursor: "pointer" }}>
      //   Select your profile image
      // </label> */}
        <MDBRipple>
          <img
            src="https://mdbootstrap.com/img/new/standard/city/041.webp"
            className="img "
            alt="..."
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              objectPosition: "bottom",
            }}
          />
          <img
            src="https://mdbootstrap.com/img/new/standard/city/041.webp"
            className="img rounded-circle "
            alt="..."
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              transform: "translate(10px, -50px)",
              border: "4px solid white",
            }}
          />
        </MDBRipple>
      </div>

      <div className="d-flex  modalInput">
        <div>
          {/* Input To see the email */}
          <Inputs title="email" value={userData?.email} isReadOnly={true} />

          {/* Input To see the username */}
          <Inputs
            title="username"
            value={userData?.username}
            isReadOnly={true}
          />

          {/* Input To change the age */}
          <Inputs
            title="age"
            value={data?.age}
            type={"number"}
            func={(e) => setData({ ...data, age: e.target.value })}
          />

          {/* Input To change the Address */}
          <Inputs
            title="address"
            value={data?.address}
            func={(e) => setData({ ...data, address: e.target.value })}
          />

          {/* Input To select file */}

          <Inputs
            type="file"
            title="Select your profile image"
            htmlFor="file"
            func={handleImageChange}
          ></Inputs>
        </div>

        {/* <input
        onChange={handleImageChange}
        id="file"
        type="file"
        style={{ visibility: "hidden" }}
      /> */}
      </div>
      {/* <button onClick={handleSave}>Save profile</button> */}
    </MDBContainer>
  );
}
