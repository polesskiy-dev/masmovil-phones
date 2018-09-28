const express = require('express');
const phonesService = require('../services/PhonesService');

const router = express.Router();

/**
 * TODO apidoc
 */
router.get('/', (req, res) => {
  const phones = phonesService.getPhonesList();
  res.json(phones);
});

module.exports = router;
