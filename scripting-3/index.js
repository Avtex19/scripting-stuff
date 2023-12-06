document.getElementById("rng").addEventListener("input", (e) => {
  document.querySelector(".output").innerText = e.target.value;
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    document.getElementById("pswd").value !==
    document.getElementById("repeat-pswd").value
  ) {
    alert("Passwords don't match!");
  }
});
