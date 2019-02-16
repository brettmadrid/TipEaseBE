const express = require('express');
const db = require('./database/dbHelpers');

const router = express.Router();
// root is '/api/worker'
// need endpoint for:
//    updating worker profile
//    deleting worker profile (should only have access to their own)
//    workers to upload a profile picture

// viewing worker profile when worker signs in
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const profileData = await db.getWorkerProfile(id);
    profileData[0]
      ? res.json(profileData)
      : res.status(404).json({ msg: 'profile not found' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
