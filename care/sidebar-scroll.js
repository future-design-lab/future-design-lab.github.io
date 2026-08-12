// Persist the docs sidebar scroll position across page navigations.
// Saves sidebar.scrollTop before unload and restores it on load, so clicking
// a sub-page link keeps the sidebar where the user left it instead of jumping
// back to the top.
(function () {
  var KEY = "fdl-sidebar-scroll";

  function getSidebar() {
    return document.querySelector(".sidebar");
  }

  function restore() {
    var sidebar = getSidebar();
    if (!sidebar) return;
    var saved = sessionStorage.getItem(KEY);
    if (saved !== null) {
      sidebar.scrollTop = parseInt(saved, 10) || 0;
    }
  }

  function save() {
    var sidebar = getSidebar();
    if (!sidebar) return;
    sessionStorage.setItem(KEY, String(sidebar.scrollTop));
  }

  // Restore as early as possible to avoid a visible flash.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", restore);
  } else {
    restore();
  }

  // Save when leaving the page and whenever a sidebar link is clicked.
  window.addEventListener("pagehide", save);
  window.addEventListener("beforeunload", save);
  document.addEventListener("click", function (e) {
    var sidebar = getSidebar();
    if (sidebar && e.target.closest(".sidebar a")) {
      save();
    }
  });
})();
