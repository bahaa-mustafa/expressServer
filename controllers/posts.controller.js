const post = require("../model/posts")

// const { post } = require("../routes/root.route");


const getAllPosts = async (req, res) => {
  const posts = await post.find()

  res.send(posts);
}

const getOnePost = async (req, res) => {
  const {id} = req.params;
  const singlePost = await post.findById(id)
  res.send(singlePost);
}

const createPost = async (req, res) => {
  const { title, body } = req.body; //distration method const title = req.body.title
  console.log({ title, body });

  await post.create({ title, body })

  res.send('post created');
}

const deletePost = async (req, res) => {
  const {id} = req.params;
  await post.findByIdAndDelete(id)
  res.send('deleted');
}

const updatePost = async (req, res) => {
  const {id} = req.params;
  const {title, body} = req.body
  await post.findByIdAndUpdate(id,{title,body})
  res.send('updated');
}

module.exports = { getAllPosts, getOnePost, createPost, deletePost, updatePost }