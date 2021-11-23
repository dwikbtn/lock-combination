const inputCombination = document.getElementById("input");
const getInput = document.getElementById("submit");

getInput.addEventListener("click", (e) => {
  e.preventDefault();
  chechCombination(inputCombination.value);
});

const chechCombination = (input) => {
  const usedCombination = [
    "one",
    "who",
    "two",
    "bob",
    "add",
    "owl",
    "fab",
    "den",
    "mia",
    "tat",
  ];
  const firstString = usedCombination
    .map((string) => {
      return string[0];
    })
    .join("");
  const secondString = usedCombination
    .map((string) => {
      return string[1];
    })
    .join("");
  const thirdString = usedCombination
    .map((string) => {
      return string[2];
    })
    .join("");

  if (
    firstString.includes(input[0]) &&
    secondString.includes(input[1]) &&
    thirdString.includes(input[2])
  ) {
    alert("this combination is possible");
  } else {
    alert("this combination is not possible");
  }
};
