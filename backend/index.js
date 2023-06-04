const express = require('express');
const route = require('./Routes/record.route')
const connect = require('./database/db')
const cors = require("cors");
const app = express();
require('dotenv').config();
app.use(express.json())

const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(cors())

app.get('/',async (req,res)=>{
  res.send("Welcome done")
})


io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("createRecord", (record) => {
    io.emit("recordCreated", record);
  });

  socket.on("updateRecord", (record) => {
    io.emit("recordUpdated", record);
  });

  socket.on("deleteRecord", (recordId) => {
    io.emit("recordDeleted", recordId);
  });
});


app.use("/record",route)


app.listen(5000,async()=>{
  console.log("Listing");
  try {
    await connect;
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
})