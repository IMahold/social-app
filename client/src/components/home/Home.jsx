import Hoot from "../hoot/Hoot";
import Navbar from "../navbar/Navbar";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { MDBIcon } from "mdb-react-ui-kit";
import "./home.css";
import RightSection from "../rightSection/rightSection";

export default function Home() {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLiked, setIsLiked] = useState([]);
  const [hearticon, setHeartIcon] = useState(isLiked ? "fas" : "far");

  const handleSave = async () => {
    const data = {
      owner: userData._id,
      text: newPost,
    };

    console.log("Home handle save data is", data);

    const response = await axios.post("/posts/add", data);
    console.log("save post: response is", response);

    setNewPost("");

    if (response.data.success) setPosts([...posts, response.data.post]);
  };

  const { userData, setUserData } = useContext(UserContext);

  const handleLogout = () => {
    setUserData(null);
    history.push("/");
  };

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

  console.log("isLiked", isLiked);
  const imgUrl = "https://mdbootstrap.com/img/new/standard/city/041.webp";

  
  return (
    <>
      <div className="d-flex pt-4 ">
        <Navbar logout={handleLogout} />
      </div>
      <div>
        <Hoot
          save={handleSave}
          onChange={(e) => setNewPost(e.target.value)}
          value={newPost}
        />

        <RightSection />

        <div className="postsContainer w-50 m-auto">
          {posts?.reverse().map((item, idx) => (
            <div
              style={{
                borderBottom: "1px solid #202327",
                padding: "20px",
                // margin: "20px",
              }}
              key={item._id}
            >
              <img
                src={  imgUrl}
                className="rounded-circle z-depth-2"
                style={{ width: "50px", height: "50px", verticalAlign: "unset"}}
              />
              {/* {setIsLiked(...isLiked, {isLiked: false})} */}
              <div className="d-inline-block mx-4">
                <span className="text-muted">{item?.owner?.username}</span>
                <p className="my-3">{item?.text}</p>
                </div>
              <div className='d-flex justify-content-between postIconContainer'>
                <MDBIcon far icon="comment" />
                <MDBIcon fas icon="retweet" />
                <i className={`${isLiked[idx] ? "fas" : "far"} fa-heart`}></i>
                <MDBIcon far icon="share-square" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
