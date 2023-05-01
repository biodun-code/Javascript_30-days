let count = 0;
const countElem = document.getElementById("count");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetbtn = document.getElementById("reset-btn");

function updateCount() {
  countElem.innerHTML = count;

  if (count > 0) {
    countElem.classList.add("green");
    countElem.classList.remove("red");
    incrementBtn.classList.add("green");
    incrementBtn.classList.remove("red");
    decrementBtn.classList.remove("green");
    decrementBtn.classList.remove("red");
  } else if (count < 0) {
    countElem.classList.add("red");
    countElem.classList.remove("green");
    incrementBtn.classList.remove("green");
    incrementBtn.classList.remove("red");
    decrementBtn.classList.add("red");
    decrementBtn.classList.remove("green");
  } else {
    countElem.classList.remove("green");
    countElem.classList.remove("red");
    incrementBtn.classList.remove("green");
    incrementBtn.classList.remove("red");
    decrementBtn.classList.remove("green");
    decrementBtn.classList.remove("red");
    resetbtn.classList.add("increase");
  }
}

incrementBtn.addEventListener("click", function () {
  count++;
  updateCount();
});

decrementBtn.addEventListener("click", function () {
  count--;
  updateCount();
});

resetbtn.addEventListener("click", function () {
  count = 0;
  updateCount();
});
