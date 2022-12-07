(() => {
  const SHOW_ANSWER = "show-answer";
  const burgerButton = document.getElementById("hamburger-button");
  const links = document.getElementById("links");
  const questions = document.querySelectorAll(".question-wrapper");
  burgerButton.onclick = () => links.classList.toggle("show");
  questions.forEach((q) => q.querySelector(".question").onclick = () => {
    questions.forEach((e) => e !== q && e.classList.remove(SHOW_ANSWER));
    q.classList.toggle(SHOW_ANSWER);
  });
})()
