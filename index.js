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

  console.log(hamburger.hamburger_menu_container)

  hamburger.hamburger_menu_container.addEventListener('click', function(e) {
    hamburger.doToggle(e);
  });
  // hamburger.nav_links_list.addEventListener('click', function(e) {
  //   hamburger.doToggle(e);
  // });

}());
