import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
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
    setShowModal(false);

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
      <div>Home</div>
      <button onClick={handleLogout}>Log out</button>
      <Link to="/profile">Profile</Link>
      <button onClick={() => setShowModal(true)}>Add post</button>

      {posts?.map((item) => (
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

      {showModal ? (
        <Modal
          save={handleSave}
          close={() => setShowModal(false)}
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
      ) : (
        <p>no posts available </p>
      )}
    </>
  );
}

function Modal({ save, close, value, onChange }) {
  return (
    <div
      style={{
        position: "fixed",
        width: "1000px",
        height: "300px",
      }}
    >
      <textarea value={value} onChange={onChange} />
      <p>
        <button onClick={close}>Discard</button>
        <button onClick={save}>Post</button>
      </p>
    </div>
  );
}
