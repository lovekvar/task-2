const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Case = require("./caseSchema");

router.post("/save", [
    body('address', 'Enter a valid address').isString(),
    body('aboutCase', 'Enter valid field relevant to your case').isString(),
    body('caseSpecific', 'Enter specifc field of your case').isString(),
    body('aboutYou', 'Tell something about your role').isString(),
    body('witness', 'Do you have any witness? ').isString(),
    body('strategy', 'Fill any of your strategy to proceed further').isString(),
    body('contact', 'Select a valid medium for communication').isString().isLength({min: 3})
  ], async (req, res)=> {
  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try{
      let clientCase = await Case.create({
        address: req.body.address,
        aboutCase: req.body.aboutCase,
        caseSpecific: req.body.caseSpecific,
        aboutYou: req.body.aboutYou,
        witness: req.body.witness,
        strategy: req.body.strategy,
        contact: req.body.contact,
        phone: req.body.phone,
        email: req.body.email,
      });
  
      res.status(200).json({Success: true, Message: `new Case with case ID ${clientCase.id} has been created successfully`});
    } catch (err) {
      console.log(err);
      res.sendStatus(500).json({Success: false, Error: "Internal Server Error"});
    }
  });

module.exports = router;