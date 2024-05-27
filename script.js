document.addEventListener("DOMContentLoaded", function () {
  const experienceBtn = document.getElementById("experience-btn");
  const projectBtn = document.getElementById("project-btn");
  const experienceSection = document.getElementById("experience");
  const projectSection = document.getElementById("project");

  experienceBtn.addEventListener("click", function () {
    experienceSection.style.display = "block";
    projectSection.style.display = "none";
  });

  projectBtn.addEventListener("click", function () {
    experienceSection.style.display = "none";
    projectSection.style.display = "block";
  });

  const overlay = document.querySelector(".overlay");
  const counter = document.querySelector(".counter");
  const bars = document.querySelectorAll(".bar");
  let count = 0;

  bars.forEach((bar, index) => {
    bar.style.animationDelay = index * 200 + "ms";
  });

  const interval = setInterval(function () {
    if (count < 100) {
      count++;
      counter.textContent = count;
    } else {
      clearInterval(interval);
      overlay.classList.add("fade-out");
      setTimeout(() => {
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
      }, 1000);
    }
  }, 30);
});
