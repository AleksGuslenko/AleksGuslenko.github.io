document.addEventListener('DOMContentLoaded', function () {
   var menuItems=$('.nav-hide');
      menuItems.on('click', function() {
      $('.collapse.navbar-collapse').removeClass('show')
     });
});
