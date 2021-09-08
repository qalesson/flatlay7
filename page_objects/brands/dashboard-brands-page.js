"use strict";
class Dashboard {
  // Reusable selector getters that will help us to avoid selector duplicates
  get $accountEmail() {
    return $('.email'); 
  }
}
module.exports = new Dashboard();
