let list1 = [];
let list2 = [];
let times = 0;
let started = 0;

document.addEventListener("keypress", function () {
  if (!started) {
    document.querySelector("#Title").innerHTML =
      "LETS PLAY<br> YOU ARE IN LEVEL: " + (times + 1);
    console.log("started");
    started = 1;
    setTimeout(function () {
      newSequence();
    }, 300);
  }
});

let press = document.querySelectorAll("button");
for (let i = 0; i < press.length; i++) {
  press[i].addEventListener("click", function (e) {
    list2.push(e.target.innerHTML);
    checkSequence(list2.length - 1);
  });
}

function newSequence() {
  list2 = [];
  let r = Math.floor(Math.random() * 4);
  list1.push(String.fromCharCode(r + "A".charCodeAt(0)));
  animate(String.fromCharCode(r + "A".charCodeAt(0)));
  console.log(list1);
  times++;
}

function checkSequence(last) {
  if (list1[last] == list2[last]) {
    if (times == last + 1) {
      console.log("Success");
      document.querySelector("#Title").innerHTML =
        "LETS PLAY<br> YOU ARE IN LEVEL: " + (times + 1);
      newSequence();
    }
  } else {
    alert("Game Over");
    list1 = [];
    list2 = [];
    times = 0;
    started = 0;

    document.querySelector("#Title").innerHTML =
      "PRESS ANY KEY OR BUTTON TO START PLAYING";
  }
}
function animate(id) {
  let curr = document.querySelector("#" + id);
  curr.classList.add("em");
  setTimeout(function () {
    curr.classList.remove("em");
  }, 200);
}
