const express =require("express");
const cors =require("cors");
const mongoose =require("mongoose");
const userRoute =require("./routes/userRoute.js")

const app =express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use("/api/auth",userRoute)

const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);

mongoose
  .connect("mongodb+srv://user:user@cluster0.5llirqc.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  