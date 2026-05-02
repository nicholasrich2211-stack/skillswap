let skills = [];

function addSkill() {
  console.log("adding...");

  const input = document.getElementById("skillInput");
  const value = input.value.trim();

  if (!value) {
    alert("type something");
    return;
  }

  skills.push(value);
  input.value = "";

  renderSkills();
}

function renderSkills() {
  const list = document.getElementById("skillsList");
  list.innerHTML = "";

  skills.forEach(skill => {
    const div = document.createElement("div");
    div.textContent = skill;
    list.appendChild(div);
  });
}
