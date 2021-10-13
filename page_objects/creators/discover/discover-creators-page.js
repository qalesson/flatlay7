class DiscoverPage {

    get $discoverLnk() { return $('[routerlink="discover"]'); }
    get $$postsItems() { return $$('[class="post-component"]'); }
}

module.exports = new DiscoverPage();