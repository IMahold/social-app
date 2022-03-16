import './profile.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../context";
import { MDBContainer, MDBIcon, MDBTypography } from "mdb-react-ui-kit";

// import Inputs from "./profileComponents/inputs";
import Edit from "./edit";
import Modal from "./profileComponents/modal";
export default function Profile() {
  const { userData, setUserData } = useContext(UserContext);
  const [data, setData] = useState({
    age: 0,
    address: "",
  });

  const [fileUrl, setFileUrl] = useState("");
  const [blobFile, setBlobFile] = useState(null);

  const [iseEdit, setiseEdit] = useState(false);

  // Modal Stuff
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  useEffect(() => {
    setData({ ...data, ...userData });
    setFileUrl(userData?.image);
  }, []);

  const handleSave = async () => {

    const dataToSend = {
      ...data,
      _id:userData._id
    }



  

    console.log("data is ", dataToSend);

    const formdata = new FormData();

    //formdata.address = data.address
    formdata.set("_id", userData._id);

    Object.entries(data).forEach((item) => formdata.set(item[0], item[1]));
    if (blobFile) formdata.set("image", blobFile, "somefilename"); // add a file and a name

    const config = {
      headers: { "content-type": "mulitpart/form-data" },
    };

    console.log("Handlesave: formdata is", formdata.keys());

    const response = await axios.patch("/users/profile", dataToSend);
    // const response = await axios.patch("/users/profile", formdata, config);

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
    <>
      <MDBContainer
        breakpoint="sm"
        fluid
        style={{ maxWidth: "600px", margin: "10px auto" }}
      >
        <MDBIcon
          fas
          icon="arrow-left"
          style={{ verticalAlign: "middle", marginTop: "-30px" }}
        />
        

        {/* <h6 className="mx-5 d-inline css-901oao text-muted"  >
              {userData?.username || "Name goes Here"}
            </h6> */}
        <div className=" d-inline-block">
          <MDBTypography
            className="mx-5   text-muted"
            variant="h4"
            style={{ marginBottom: "0" }}
          >
            {userData?.username || "Name goes Here"}
          </MDBTypography>
          <p className="mx-5">Hoots {data?.posts}</p>
        </div>
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
        <button onClick={toggleShow}> Edit Profile </button>
      </MDBContainer>

      {basicModal ? (
        <Modal
          toggleShow={toggleShow}
          basicModal={basicModal}
          setBasicModal={setBasicModal}
        >
          <Edit
            userData={userData}
            data={data}
            fileUrl={fileUrl}
            setData={setData}
            handleImageChange={handleImageChange}
            handleSave={handleSave}
            close={toggleShow}
            
          />
        </Modal>
      ) : null}
    </>
  );
}
