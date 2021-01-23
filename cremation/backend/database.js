const mongoose = require('mongoose');
const connection = "mongodb+srv://cremationuser:cremation@cluster0.gu8wc.mongodb.net/test";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));