const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Business = require("../models/business");

router.get("/business", (req, res) => {
  Business.find().then(business => {
    return res.json(business);
  });
});

router.post("/business", (req, res) => {
  const businesses = new Business({
    name: req.body.name,
    business_number: req.body.business_number,
    gst_number: req.body.gst_number
  });
  businesses.save().then(business => {
    res.json(business);
  });
});

router.get("/edit/:id", (req, res) => {
  Business.findById(req.params.id).then(business => {
    res.status(200).json(business);
  });
});

router.post("/update/:id", (req, res) => {
  Business.findById(req.params.id)
    .then(business => {
      if (!business) {
        return res.status(404).json("data not found");
      }
      (business.name = req.body.name),
        (business.business_number = req.body.business_number),
        (business.gst_number = req.body.gst_number);

      business.save().then(busines => {
        res.json(busines);
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.delete("/delet/:_id", (req, res) => {
  Business.findByIdAndDelete(req.params._id)
    .then(business => {
      return res.json("deleted");
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
