const express = require("express");
const router = express.Router();
const crudcontroller=require("../controllers/crudcontrollers")

router.post("/create",crudcontroller.create)

module.exports=router