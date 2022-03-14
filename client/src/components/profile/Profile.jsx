import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context";
import { MDBContainer, MDBRipple, MDBBtn } from "mdb-react-ui-kit";

import Inputs from "./profileComponents/inputs";

export default function Profile() {
  const { userData, setUserData } = useContext(UserContext);
  const [data, setData] = useState({
    age: 0,
    address: "",
  });

  const [fileUrl, setFileUrl] = useState("");
  const [blobFile, setBlobFile] = useState(null);

  useEffect(() => {
    setData({ ...data, ...userData });
    setFileUrl(userData?.image);
  }, []);

  const handleSave = async () => {
    console.log("data is ", data);

    const formdata = new FormData();

    //formdata.address = data.address
    formdata.set("_id", userData._id);

    Object.entries(data).forEach((item) => formdata.set(item[0], item[1]));

    // formdata.set('address', data.address )
    // formdata.set('email', data.email )
    // formdata.set('username', data.username )
    // formdata.set('age', data.age )

    if (blobFile) formdata.set("image", blobFile, "somefilename"); // add a file and a name

    const config = {
      headers: { "content-type": "mulitpart/form-data" },
    };

    console.log("Handlesave: formdata is", formdata.keys());

    const response = await axios.patch("/users/profile", formdata, config);

    console.log("response from profile is", response);

    if (response.data.success) setUserData({ ...response.data.user });
  };

  const handleImageChange = (e) => {
    console.log("File is", e.currentTarget.files[0]);
    // console.log('File is', e.target.files[0])

    const file = e.currentTarget.files[0];

    setFileUrl(URL.createObjectURL(file)); // create a url from file user chose and update the state

    setBlobFile(e.currentTarget.files[0]);
  };
  return (
    <MDBContainer breakpoint="sm">
      <p>
        <Link to="/home">Home</Link>
      </p>

      <div className="d-flex  ">
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

        <div className="mx-4">
          {/* // <label htmlFor="file" style={{ cursor: "pointer" }}>
        //   Select your profile image
        // </label> */}
          <MDBRipple rippleTag="div">
            <img
              src={fileUrl}
              alt=""
              style={{ height: '300px', width: '300px' , objectFit: "cover" }}
              className="img-fluid rounded "
            />
          </MDBRipple>
        </div>
        {/* <input
          onChange={handleImageChange}
          id="file"
          type="file"
          style={{ visibility: "hidden" }}
        /> */}
      </div>
      {/* <button onClick={handleSave}>Save profile</button> */}
      <MDBBtn onClick={handleSave}>
      Save profile
      </MDBBtn>
    </MDBContainer>
  );
}
