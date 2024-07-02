window.addEventListener("load", () => {
  const homeTl = gsap.timeline();

  homeTl
    .from("header", {
      y: -50,
    })
    .from("header nav a", {
      y: -50,
      stagger: 0.1,
    })
    .from(["#home .name", "#home .desc", "#home .resume"], {
      y: 50,
      opacity: 0,
      stagger: 0.2,
    })
    .from(["#socials", "#email"], {
      y: 50,
      opacity: 0,
    });

  const aboutTl = gsap.timeline();

  aboutTl.from(["#about .subheading", "#about .desc p", "#about .skills li"], {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      // markers: true,
      start: "top 80%",
      end: "top 40%",
      scroller: "body",
      trigger: "#about",
      scrub: 2,
    },
  });

  const projectsTl = gsap.timeline();

  projectsTl.from("#projects .subheading", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
      // markers: true,
      start: "top 90%",
      end: "top 80%",
      trigger: "#projects",
      scrub: 2,
    },
  });

  const projectElements = gsap.utils.toArray("#projects .project");

  projectElements.forEach((project, index) => {
    const projectImage = project.querySelector(".project-image");
    const projectContent = project.querySelector("#projects .content");

    gsap.from(projectImage, {
      x: index % 2 === 0 ? -50 : 50,
      opacity: 0,
      scrollTrigger: {
        // markers: true,
        start: "top 90%",
        end: "top 80%",
        trigger: project,
        scrub: 2,
      },
    });

    gsap.from(projectContent, {
      x: index % 2 === 0 ? 50 : -50,
      opacity: 0,
      scrollTrigger: {
        // markers: true,
        start: "top 90%",
        end: "top 80%",
        trigger: project,
        scrub: 2,
      },
    });
  });

  projectsTl.from("#projects .show-more", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
      // markers: true,
      start: "top 90%",
      end: "top 80%",
      trigger: "#projects .show-more",
      scrub: 2,
    },
  });

  contactTl = gsap.timeline();

  contactTl.from(
    ["#contact .subheading", "#contact .desc", "#contact .hello"],
    {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        // markers: true,
        start: "top 80%",
        end: "top 40%",
        trigger: "#contact",
        scrub: 2,
      },
    }
  );
});
