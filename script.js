// Load compliments from local storage on page load
document.addEventListener("DOMContentLoaded", () => {
  displayCompliments();
});

// Send compliment
function sendCompliment() {
  const compliment = document.getElementById("complimentInput").value.trim();
  if (compliment === "") {
    alert("Please write something kind!");
    return;
  }

  let compliments = JSON.parse(localStorage.getItem("compliments")) || [];
  compliments.push(compliment);
  localStorage.setItem("compliments", JSON.stringify(compliments));

  document.getElementById("complimentInput").value = "";
  displayCompliments();
}

// Display compliments
function displayCompliments() {
  const complimentList = document.getElementById("complimentList");
  complimentList.innerHTML = "";

  let compliments = JSON.parse(localStorage.getItem("compliments")) || [];

  compliments.forEach((compliment, index) => {
    const li = document.createElement("li");
    li.textContent = compliment;
    complimentList.appendChild(li);
  });
}

// Toggle dark mode
function toggleMode() {
  document.body.classList.toggle("dark");
}
