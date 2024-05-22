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
});
