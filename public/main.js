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

  // vision animation https://tobiasahlin.com/moving-letters/#2
  const textWrapper = document.querySelector('.ml2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: true})
    .add({
      targets: '.ml2 .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70*i
    }).add({
      targets: '.ml2',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
})()
