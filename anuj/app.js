const dropHandler = () => {
  document.getElementById("dropContent").classList.toggle("show");

  window.onclick = function (e) {
    if (!e.target.matches(".dropBtn")) {
      var dropdown = document.getElementById("dropContent");
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    }
  };
};
