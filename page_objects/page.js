"use strict";
class Page {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $searchTxt() {return $('[name="search"]');}
}
module.exports = new Page();