const mobileNav = () => {
  const nav = document.querySelector("header nav");
  const menuBtn = document.querySelector(".hamburger");
  const navLinks = document.querySelectorAll("header nav a");

  let isMobileNavOpen = false;

  menuBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      nav.classList.add("active");
      menuBtn.classList.toggle("active");
      document.body.style.overflowY = "hidden";
    } else {
      nav.classList.remove("active");
      menuBtn.classList.remove("active");
      document.body.style.overflowY = "auto";
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      nav.classList.remove("active");
      menuBtn.classList.remove("active");
      document.body.style.overflowY = "auto";
    });
  });
};

export default mobileNav;
