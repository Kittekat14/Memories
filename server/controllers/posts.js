import PostMessage from "../models/postMessage.js";

// posts here to don't get confused with all the routes

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find(); //over mongoose finding in MongoDB
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body; // post should be done over body
  const newPost = new PostMessage(post);

  try {
    await newPost.save(); //async saving of new Post in MongoDB
    res.status(201).json(newPost); // and giving successful answer of new Post
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
