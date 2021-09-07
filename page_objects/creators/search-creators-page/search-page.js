class SearchPage {             
    get searchTxt() { return $('[name="search"]');}
    get searchResultsCreators() { return $$('[class="search-component creators all"] [class="name"]');}
    get searchResultsFeeds() { return $$('[class="col-8 feed-detail-container"]');}
    get moveToProducts() { return $('[class="search-component products all"]');}
    get searchResultsProducts() { return $$('[class="search-component products all"] [class="content-wrap d-flex ng-star-inserted"]');}    
        
    search(searchTask) {
        this.searchTxt.waitForClickable();
        this.searchTxt.setValue(searchTask);
    }
}

module.exports = new SearchPage();