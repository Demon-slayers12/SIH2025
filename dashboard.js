const studyMaterials = {
  "DSA": ["Arrays", "Linked List", "Trees"],
  "AI / ML": ["Linear Regression", "Neural Networks"],
  "DBMS": ["SQL Basics", "Joins", "Normalization"],
  "Web Development": ["HTML", "CSS", "JavaScript Basics"],
  "Cyber-security": ["Cryptography", "Network Security"],
};

window.onload = function () {
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (!userData) {
    alert("No user data found! Please login again.");
    window.location.href = "index.html";
    return;
  }

  
  document.getElementById("dash-pic").src = userData.photo || "https://via.placeholder.com/100";
  document.getElementById("dash-name").innerText = userData.name;
  document.getElementById("dash-college").innerText = userData.college;
  document.getElementById("dash-year").innerText = userData.year;

  
  const materialList = document.getElementById("material-list");
  userData.categories.forEach(cat => {
    const div = document.createElement("div");
    div.classList.add("material-card");
    div.innerHTML = `<h3>${cat}</h3><p>${studyMaterials[cat]?.join(", ") || "No materials yet."}</p>`;
    materialList.appendChild(div);
  });
};

window.onload = function() {
  const user = JSON.parse(localStorage.getItem("userData"));

  if (user) {
    document.getElementById("profileName").textContent = user.name;
    document.getElementById("profileCollege").textContent = user.college;
    document.getElementById("profileCategories").textContent = user.categories.join(", ");
  }
};


window.onload = function() {
  document.getElementById("profileName").textContent = localStorage.getItem("userName") || "Guest";
  document.getElementById("profileCollege").textContent = localStorage.getItem("userCollege") || "Not Provided";
  document.getElementById("profileContact").textContent = localStorage.getItem("userContact") || "N/A";
   
  
const linkedin = localStorage.getItem("userLinkedIn");
  if (linkedin) {
    document.getElementById("profileLinkedIn").href = linkedin;
    document.getElementById("profileLinkedIn").textContent = linkedin;
  }


  const github = localStorage.getItem("userGitHub");
  if (github) {
    document.getElementById("profileGitHub").href = github;
    document.getElementById("profileGitHub").textContent = github;
  }
  
   document.getElementById("profileState").textContent = localStorage.getItem("userState") || "N/A";

  const categories = JSON.parse(localStorage.getItem("userCategories")) || [];
  document.getElementById("profileCategories").textContent = categories.join(", ") || "None";

  const pic = localStorage.getItem("userPic");
  if (pic && pic !== "#") {
    document.getElementById("profileImage").src = pic;
  }
};
