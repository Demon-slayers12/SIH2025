let uploadedPic = "";

function loginCheck() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter email and password!");
    return;
  }
  if (!email.includes("@")) {
    alert("Invalid email address!");
    return;
  }
  if (password.length < 5) {
    alert("Password must be at least 5 characters!");
    return;
  }

  nextStep(1);
}


function validateStep2() {
  const name = document.getElementById("name").value.trim();
  const college = document.getElementById("college").value.trim();
  // const year = document.getElementById("year").value.trim();

  if (!uploadedPic) {
    alert("Please upload a profile picture!");
    return;
  }
  if (!name || !college || !year) {
    alert("Please fill in all fields!");
    return;
  }

  nextStep(2);
}


function validateStep3() {
  const categories = Array.from(document.getElementById("categories").selectedOptions).map(o => o.value);

  if (categories.length === 0) {
    alert("Please select at least one category!");
    return;
  }

  const name = document.getElementById("name").value;
  const college = document.getElementById("college").value;

  document.getElementById("summary").innerHTML = `
    <img src="${uploadedPic}" alt="Profile"><br>
    <b>Name:</b> ${name} <br>
    <b>College:</b> ${college} <br>
    <b>Categories:</b> ${categories.join(", ")}
  `;

  nextStep(3);
}


function validateStep4() {
  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const linkedin = document.getElementById("linkedin").value.trim();
  const state = document.getElementById("state").value.trim();
  const Github = document.getElementById("Github").value.trim();
  nextStep(4);
}


function nextStep(current) {
  const steps = document.querySelectorAll(".step");
  steps[current - 1].classList.remove("active");
  steps[current].classList.add("active");
}


function restart() {
  location.reload();
}


const fileInput = document.getElementById("fileInput");
const profilePic = document.getElementById("profile-pic");

fileInput.addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      profilePic.src = e.target.result;
      uploadedPic = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
function goToDashboard() {
  window.location.href = "dashboard.html";
}

function goToDashboard() {
  const name = document.getElementById("name").value;
  const college = document.getElementById("college").value;
  const categories = Array.from(document.getElementById("categories").selectedOptions).map(o => o.value);
  const profilePic = document.getElementById("profile-pic").src;
   const contact = document.getElementById("contact").value.trim();
  const linkedin = document.getElementById("linkedin").value.trim();
  const state = document.getElementById("state").value.trim();

   if(!name || !college || !contact || !linkedin || !state || categories.length === 0){
    alert("please fill all details before continuing!");
    return;
   }
  localStorage.setItem("userName", name);
  localStorage.setItem("userCollege", college);
  localStorage.setItem("userCategories", JSON.stringify(categories));
  localStorage.setItem("userPic", profilePic);
  localStorage.setItem("userContact", contact);
  localStorage.setItem("userLinkedIn", linkedin);
  localStorage.setItem("userState", state);
  localStorage.setItem("userGithub", Github);


  window.location.href = "dashboard.html";
}


if (current === 3) { 
  const name = document.getElementById('name').value;
  const college = document.getElementById('college').value;
  const categories = Array.from(document.getElementById('categories').selectedOptions).map(o=>o.value);


  localStorage.setItem("userData", JSON.stringify({
    name,
    college,
    categories
  }));

  document.getElementById('summary').innerHTML = `
    Name: ${name} <br>
    College: ${college} <br>
    Categories: ${categories.join(', ')}
  `;
}
