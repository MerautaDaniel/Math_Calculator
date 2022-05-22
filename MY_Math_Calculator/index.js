const dropButtons = document.querySelectorAll(".nav__dropdown-btn");
const submenus = document.querySelectorAll(".nav__dropdown-content");

for (let i = 0; i < dropButtons.length; i++) {
  const dropButton = dropButtons[i];
  const submenu = submenus[i];

  dropButton.addEventListener("click", showSubmenu);
  function showSubmenu() {
    submenu.classList.toggle("show");
  }
}
//this will close the dropdown if we click outside
window.onclick = function (event) {
  if (!event.target.matches(".nav__dropdown-btn")) {
    const dropdowns = document.getElementsByClassName("nav__dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
