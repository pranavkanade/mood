const mongoose = require("mongoose");

// Map global promises
mongoose.Promise = global.Promise;

// Mongoose Connection
mongoose
    .connect(
        "mongodb://prak:asdf1234@ds133670.mlab.com:33670/mood-dev",
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
