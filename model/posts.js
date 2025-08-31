const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title:{
        type: String,
        require:true
    },
    body:{
        type: String,
        require:true
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
// export default Post