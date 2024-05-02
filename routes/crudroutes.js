const express = require("express");
const router = express.Router();
const crudcontroller=require("../controllers/crudcontrollers")

router.post("/created",crudcontroller.create)
router.put("/update",crudcontroller.update)
router.get("/getdatabyid/:_id",crudcontroller.getdatabyid)
router.get("/getalldata",crudcontroller.getalldata)

module.exports=router;