
const express = require("express");
const router = express.Router();

const { getAllusers, getOneUser, createUser, deleteUser, updateUser} = require("../controllers/users.controller")


router.get('/', getAllusers)

router.get('/:id', getOneUser)

router.post('/', createUser)

router.delete('/:id', deleteUser)

router.put('/:id', updateUser)

module.exports = router;