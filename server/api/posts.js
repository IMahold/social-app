const express = require("express");


const router = express.Router();

const Post = require("../models/Posts");

router.post("/add", async (req, res) => {
  try {
    console.log("posts/add body is", req.body);
    const newPost = new Post(req.body);

    const post = await newPost
      .save()
      .then((item) =>
        item.populate({ path: "owner", select: "username email" })
      );
    if (!post) return res.send({ success: false, errorId: 2 });
    res.send({ success: true, post });
  } catch (error) {
    console.log("Posts add ERROR", error.message);
    res.send(error.message);
  }
});

router.get("/list", async (req, res) => {
  try {
    // .limit(10) removed because we want all the posts to be shown
    const posts = await Post.find().populate({
      path: "owner",
      select: "username age address",
    });

    res.send(posts);
  } catch (error) {
    console.log("Posts list ERROR", error.message);
    res.send(error.message);
  }
});

module.exports = router;
