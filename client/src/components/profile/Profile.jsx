import "./profile.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../context";
import { MDBContainer, MDBIcon, MDBTypography } from "mdb-react-ui-kit";
import Navbar from "../navbar/Navbar";

// import Inputs from "./profileComponents/inputs";
import Edit from "./edit";
import Modal from "./profileComponents/modal";
import RightSection from "../rightSection/rightSection";
export default function Profile() {
  const { userData, setUserData } = useContext(UserContext);
  const [data, setData] = useState({
    age: 0,
    address: "",
  });

  const imgUrl = "https://mdbootstrap.com/img/new/standard/city/041.webp";

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
      _id: userData._id,
    };

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

  const [posts, setPosts] = useState([]);

  const history = useHistory();

  useEffect(() => {
    if (!userData) history.push("/");
    const getData = async () => {
      let response = await axios.get("posts/list");
      if (!userData) return; // to fix the memory leak warning when refresh tha page
      console.log("Home loading response is", response);
      setPosts([...response.data]);
    };

    getData();
  }, []);
  const handleLogout = () => {
    setUserData(null);
    history.push("/");
  };

  console.log(data?.posts?.length);
  return (
    <>
      <MDBContainer
        breakpoint="sm"
        fluid
        style={{ padding: "10px 0" }}
        className="w-50"
      >
        <Link to="/home">
          <MDBIcon
            fas
            icon="arrow-left"
            className="text-dark"
            style={{ verticalAlign: "middle", marginTop: "-30px" }}
          />
        </Link>

        {/* <h6 className="mx-5 d-inline css-901oao text-muted"  >
              {userData?.username || "Name goes Here"}
            </h6> */}
        <div className=" d-inline ">
          <MDBTypography
            className="mx-5"
            variant="h4"
            style={{ marginBottom: "0" }}
          >
            {userData?.username || "Name goes Here"}
          </MDBTypography>
          <p className="mx-5"> <span className="text-muted">{posts?.length} Hoots</span></p>
        </div>
        <img
          src={imgUrl}
          className="img "
          alt="..."
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            objectPosition: "bottom",
          }}
        />
        <img
          src={imgUrl}
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
        <button className="btn text-light m-5 button-design" onClick={toggleShow}> Edit Profile </button>
      </MDBContainer>

      {basicModal ? (
        <Modal
          toggleShow={toggleShow}
          basicModal={basicModal}
          setBasicModal={setBasicModal}
          className="modal-design"
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
        <Navbar logout={handleLogout} />
        <RightSection />
      {posts?.reverse().map((item, idx) => (
        <div
          style={{
            borderBottom: "1px solid #202327",
            padding: "20px",
            width: "50%",
            margin: 'auto'
            // margin: "20px",
          }}
          key={item._id}
        >
          <img
            src={imgUrl}
            className="rounded-circle z-depth-2"
            style={{ width: "50px", height: "50px", verticalAlign: "unset" }}
          />
          {/* {setIsLiked(...isLiked, {isLiked: false})} */}
          <div className="d-inline-block mx-4">
            <span className="text-muted">{item?.owner?.username}</span>
            <p className="my-3">{item?.text}</p>
          </div>
          <div className="d-flex justify-content-between postIconContainer">
            <MDBIcon far icon="comment" />
            <MDBIcon fas icon="retweet" />
            <i className={`far fa-heart`}></i>
            <MDBIcon far icon="share-square" />
          </div>
        </div>
      ))}
    </>
  );
}
