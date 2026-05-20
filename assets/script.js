(function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");

  function setTheme(theme, persist) {
    root.dataset.theme = theme;
    if (persist) {
      try {
        localStorage.setItem("relif-theme", theme);
      } catch (error) {
        // Theme still changes even if storage is unavailable.
      }
    }
    if (toggle) {
      var isLight = theme === "light";
      toggle.setAttribute("aria-pressed", String(isLight));
      toggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
    }
  }

  if (!root.dataset.theme) {
    setTheme("dark", false);
  } else {
    setTheme(root.dataset.theme, false);
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setTheme(root.dataset.theme === "light" ? "dark" : "light", true);
    });
  }
})();
