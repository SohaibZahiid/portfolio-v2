import "../styles/style.css";
import "../styles/header.css";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/projects.css";
import "../styles/contact.css";
import "../styles/footer.css";
import "../styles/socials.css";

const menuBtn = document.querySelector(".hamburger");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    menuBtn.classList.remove("active");
  }
});
