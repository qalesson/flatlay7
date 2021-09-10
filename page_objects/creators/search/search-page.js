class SearchPage {             
    get $searchTxt() { return $('[name="search"]');}
    get $searchResultsCreators() { return $$('[class="search-component creators all"] [class="name"]');}
    get $searchResultsFeeds() { return $$('[class="col-8 feed-detail-container"]');}
    get $productsLbl() { return $('[class="search-component products all"]');}
    get $searchResultsProducts() { return $$('.products.all .bullet-wrap > div');}    
        
    search(searchTask) {
        this.$searchTxt.waitForClickable();
        this.$searchTxt.setValue(searchTask);
    }
}

module.exports = new SearchPage();