import Hoot from "../hoot/Hoot";
import Navbar from "../navbar/Navbar";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context";
import { useHistory } from "react-router-dom";
import axios from "axios";

import './home.css'
import RightSection from "../rightSection/rightSection";

export default function Home() {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState([]);

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

        <div className='postsContainer w-50 m-auto'>
          {posts?.reverse().map((item) => (
            <div
              style={{
                borderBottom: "1px solid #202327",
                padding: "50px",
                // margin: "20px",
              }}
              key={item._id}
            >
              {item?.owner?.username} == {item?.text}
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
