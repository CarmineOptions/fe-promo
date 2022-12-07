const bg = document.getElementById("bg");
const button = document.getElementById("set-bg");
const input = document.getElementById("bg-color");

button.onclick = () => {
  const value = input.value;
  if (!value || typeof value != "string") {
    return;
  }
  bg.style.background = value;
};
