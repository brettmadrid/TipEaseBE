const express = require("express");
const db = require("../database/dbHelpers");

const router = express.Router();

// root is '/api/customer'
router.get("/", async (req, res) => {
  try {
    const workers = await db.getWorkers();
    res.json(workers);
  } catch (err) {
    res.status(500).json({ error: "an error has occured" });
  }
});

// endpoint for a customer to send a tip to a specific worker
router.post("/worker/:id", async (req, res, next) => {
  // need worker id to query the DB
  const { id } = req.params;
  // need tip amount
  const { tip } = req.body;

  if (!tip) {
    return res.send("Please enter a tip amount");
  }

  if (tip < 0) {
    return res.send("Valid tips need to be at least $0.01");
  }
  // query DB to get specific workors totalTips, then sum up the current total with the amount that the customer is sending
  try {
    const sendTip = await db.sendTipToWorker(id, tip);
    res.send(sendTip);
  } catch (err) {
    res.status(500).json({ error: "an error has occured" });
  }
});

module.exports = router;
