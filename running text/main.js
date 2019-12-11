const content =
  "Lorem ipsum dolor sitel pellentesqu, ante nulla hendrerit arcu, ac tincidunt mauris lacus sed leo.";
const textEl = document.querySelector(".text");

function run(text, time) {
  let i = 0;
  let show = setInterval(() => {
    if (i === text.length - 1) {
      clearInterval(show);
    }
    let char = document.createElement("span");
    char.innerHTML = text[i];
    char.className = "char";
    textEl.appendChild(char);
    i++;
  }, time);
}

run(content, 50);
