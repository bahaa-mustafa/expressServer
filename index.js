const express = require('express');
const app = express();
const port = 3000;
const morgan = require("morgan");

const mongoose = require('mongoose');

const rootRouter = require("./routes/root.route");
const postsRoute = require("./routes/posts.route");
const usersRoute = require("./routes/users.route");

// manul middleware for root
app.use("/", rootRouter)

// express middleware
app.use(express.json())

// npm middleware
app.use(morgan("tiny"))

// manul middleware for posts
app.use("/posts", postsRoute )

// manul middleware for users
app.use("/users", usersRoute )


// connect to mongodb using mongoosejs 
mongoose.connect('mongodb://127.0.0.1:27017/express_server').then(()=>{
  console.log("Connected to DB");  
}).catch(()=>{
  console.log("Error in connection to DB");  
});

app.listen(port, () => {
  console.log(`Starting app listening on port ${port}`)
})
