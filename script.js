let skills = [];

function addSkill() {
  const input = document.getElementById("skillInput");
  const skill = input.value.trim();

  if (skill === "") return;

  skills.push(skill);
  input.value = "";

  displaySkills();
}

function displaySkills() {
  const list = document.getElementById("skillsList");
  list.innerHTML = "";

  skills.forEach(skill => {
    const div = document.createElement("div");
    div.textContent = skill;
    list.appendChild(div);
  });
}
