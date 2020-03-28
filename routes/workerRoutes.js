const express = require("express");
const db = require("../database/dbHelpers");

const router = express.Router();
// root is '/api/worker'
// need endpoint for:
//    workers to upload a profile picture

router.get("/:id", async (req, res) => {
  // viewing worker profile when worker signs in
  const { id } = req.params;
  try {
    const profileData = await db.getWorkerProfile(id);
    profileData[0]
      ? res.json(profileData)
      : res.status(404).json({ msg: "profile not found" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  // deleting worker profile (should only have access to their own)
  const { id } = req.params;
  try {
    const count = await db.deleteWorker(id);
    count
      ? res.status(201).send("Account Deleted")
      : res.status(404).send("Account not found");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/update/:id", async (req, res) => {
  // updating worker profile
  const changes = req.body;
  const { id } = req.params;
  try {
    const count = await db.updateWorker(id, changes);
    count
      ? res.status(202).json({ message: "Profile was updated successfully" })
      : res.status(404).json({ error: `Profile not found` });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
