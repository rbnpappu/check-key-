const keyboard = document.querySelector(".keyboard");
keyboard.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.keycode === 50 || e.keycode === 90) {
    alert("sorry you cannot use that symbol" + e.key);
    e.preventDefault();
  }
});
