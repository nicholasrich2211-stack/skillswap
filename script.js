let skills = JSON.parse(localStorage.getItem("skills")) || [];

function addSkill() {
  const input = document.getElementById("skillInput");
  const value = input.value.trim();

  if (!value) return;

  skills.push(value);
  localStorage.setItem("skills", JSON.stringify(skills));

  input.value = "";
  renderSkills();
}

function renderSkills() {
  const list = document.getElementById("skillsList");
  list.innerHTML = "";

  skills.forEach((skill, index) => {
    const item = document.createElement("div");
    item.textContent = skill;

    list.appendChild(item);
  });
}

// load on start
renderSkills();
