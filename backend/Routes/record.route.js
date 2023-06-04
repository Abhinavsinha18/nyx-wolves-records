const express = require("express");
const { GetRecords, PostRecord, DeleteRecord, updateRecord } = require("../controller/record");




const route = express.Router();

route.get("/", GetRecords);
route.post("/add", PostRecord);
route.delete("/delete/:id", DeleteRecord);
route.put("/update/:id", updateRecord);


module.exports = route;
