const express = require("express");
const router = express.Router();
const MetadataCtr = require("../controller/MetadataCtr")

router.get("/mutant/:id", MetadataCtr.metajson);

module.exports = router;
