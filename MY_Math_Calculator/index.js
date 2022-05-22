const dropButtons = document.querySelectorAll(".drop-btn");
const submenus = document.querySelectorAll(".dropdown-content");

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
  if (!event.target.matches(".drop-btn")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
