(function() {

  var hamburger = {
    hamburger_menu_container: document.querySelector('.hamburger_menu_container'),
    nav_links_list: document.querySelector('.nav_links_list'),

    doToggle: function(e) {
      e.preventDefault();
      this.hamburger_menu_container.classList.toggle('menu_expanded');
      this.nav_links_list.classList.toggle('list_expanded');
    }
  };

  hamburger.hamburger_menu_container.addEventListener('click', function(e) {
    hamburger.doToggle(e);
  });
}());
