
import Hoot from "../hoot/Hoot";
import Navbar from "../navbar/Navbar";
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../context'
import { useHistory } from "react-router-dom";
import axios from "axios";

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
      const response = await axios.get('posts/list')
      console.log("Home loading response is",response);
      setPosts([...response.data])

    }

    getData()
  },[]);
  return (
    <>
     <div className="d-flex pt-4">
      <Navbar logout={handleLogout} />
      <div>
        <Hoot save={handleSave} onChange={(e) => setNewPost(e.target.value)} value={newPost}/>
      </div>
      
    
    </div>


  

      {posts?.reverse().map((item) => (
        <div
          style={{
            border: "1px solid",
            padding: "30px",
            margin: "20px",
          }}
          key={item._id}
        >
          {item?.owner?.username} == {item?.text}
        </div>
      ))}

   
    </>
  );
}


