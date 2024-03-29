class SearchPage {             
    get $searchTxt() { return $('[name="search"]');}
    get $$searchResultsCreators() { return $$('[class="search-component creators all"] [class="name"]');}
    get $$searchResultsContents() { return $$('[class="col-8 feed-detail-container"]');}
    get $productsLbl() { return $('[class="search-component products all"]');}
    get $$searchResultsProducts() { return $$('.products.all .bullet-wrap > div');}
    get $searchCreatorsOnly() { return $('.actions p:nth-child(2)');}
    get $$searchResultsCreatorsOnly() { return $$('.list .name');}
    get $searchContentsOnly() { return $('.actions p:nth-child(3)');} 
            
    search(searchTask) {
        this.$searchTxt.waitForClickable();
        this.$searchTxt.setValue(searchTask);
    }
}

module.exports = new SearchPage();