class SearchPage {             
    get searchTxt() { return $('[name="search"]');}
    get searchResultsCreators() { return $$('[class="search-component creators all"] [class="name"]');}
    get searchResultsCreatorsOnly() { return $$('[class="bullet-wrap py-4 ng-star-inserted"]');}
    get searchResultsFeeds() { return $$('[class="col-8 feed-detail-container"]');}
    get moveToProducts() { return $('[class="search-component products all"]');}
    get searchResultsProducts() { return $$('[class="search-component products all"] [class="content-wrap d-flex ng-star-inserted"]');}    
    get searchCreatorsOnly() { return $('[class="actions d-flex"] p:nth-child(2)');}    
    
    search(searchTask) {
        this.searchTxt.waitForClickable();
        this.searchTxt.setValue(searchTask);
    }
}

module.exports = new SearchPage();