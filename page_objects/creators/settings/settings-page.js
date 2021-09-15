class SettingsPage {             
    get $addressBookBtn() { return $('span=Address book');}
    get $addNewAddressBtn() { return $('[class="add-new"]');}   
    get $firstNameFld() { return $('[id="first_name"]');}   
    get $lastNameFld() { return $('[id="last_name"]');}   
    get $addressLineFld() { return $('[id="line1"]');}   
    get $countryFld() { return $('[id="country"]');}      
    get $cityFld() { return $('[id="city"]');}   
    get $stateFld() { return $('[id="state"]');}   
    get $zipFld() { return $('[id="zip"]');}   
    get $submitBtn() { return $('[type="submit"]');}   
    get $newAddressLbl() { return $('[class="address primary-address ng-star-inserted"]');}   
}

module.exports = new SettingsPage();