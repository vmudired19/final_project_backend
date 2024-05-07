const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://vmudired:suYARHSYNZ9SPzj0@cluster0.jiik9cj.mongodb.net/budgetdata?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  }
);
