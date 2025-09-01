const user = require("../model/users")

const getAllusers = async (req, res) => {
  const users = await user.find()

  res.send(users);
}

const getOneUser = async (req, res) => {
  const {id} = req.params;
  const singleUser = await user.findById(id)
  res.send(singleUser);
}

const createUser = async (req, res) => {
  const { userName, password } = req.body; //distration method const title = req.body.title
  console.log({ userName, password });

  await user.create({ userName, password })

  res.send('user created');
}

const deleteUser = async (req, res) => {
  const {id} = req.params;
  await user.findByIdAndDelete(id)
  res.send('deleted');
}

const updateUser = async (req, res) => {
  const {id} = req.params;
  const {userName, password} = req.body
  await user.findByIdAndUpdate(id,{userName,password})
  res.send('updated');
}

module.exports = { getAllusers, getOneUser, createUser, deleteUser, updateUser }