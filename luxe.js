/* Shared: highlight the current page in the concept switcher bar */
(function () {
  var p = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.compbar a').forEach(function (a) {
    if (a.getAttribute('href') === p) a.classList.add('active');
  });
})();
