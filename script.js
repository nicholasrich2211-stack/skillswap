const suggestionList = [
  "Guitar",
  "Guitar Lessons",
  "Guitar Chords",
  "Basketball",
  "Coding",
  "Python",
  "Public Speaking",
  "Cooking",
  "Photography"
]
let skills = JSON.parse(localStorage.getItem("skills")) || [];

function save() {
  localStorage.setItem("skills", JSON.stringify(skills));
}

function addSkill() {
  const input = document.getElementById("skillInput");
  const value = input.value.trim();

  if (!value) return;

  skills.push(value);
  save();
  input.value = "";
  display(skills);
}

function searchSkill() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = skills.filter(s => s.toLowerCase().includes(query));
  display(filtered);
}

function display(arr) {
  const list = document.getElementById("list");
  list.innerHTML = "";

  arr.forEach(s => {
    const div = document.createElement("div");
    div.textContent = s;
    list.appendChild(div);
  });
}

display(skills);
function showSuggestions() {
  const input = document.getElementById("skillInput").value.toLowerCase();
  const box = document.getElementById("suggestions");

  box.innerHTML = "";

  if (!input) return;

  const filtered = suggestionList.filter(s =>
    s.toLowerCase().includes(input)
  );

  filtered.forEach(s => {
    const div = document.createElement("div");
    div.textContent = s;
    div.onclick = () => {
      document.getElementById("skillInput").value = s;
      box.innerHTML = "";
    };
    box.appendChild(div);
  });
}
