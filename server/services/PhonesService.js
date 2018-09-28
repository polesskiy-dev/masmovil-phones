const phonesList = require('../seeds/phones-list');

class PhonesService {
  constructor() {
    this.phonesList = phonesList;
  }

  getPhonesList() {
    return this.phonesList;
  }
}

const phonesService = new PhonesService();

module.exports = phonesService;
