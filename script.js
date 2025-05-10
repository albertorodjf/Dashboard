let clickCount = 0;
let title = document.getElementById("secret-click");

title.addEventListener("click", () => {
  clickCount++;
  if (clickCount === 5) {
    let password = prompt("Enter password:");
    if (password === "relax") {
      document.getElementById("hidden-games").classList.remove("hidden");
    } else if (password === "phantom") {
      document.getElementById("proxy-panel").classList.remove("hidden");
    }
  }
});