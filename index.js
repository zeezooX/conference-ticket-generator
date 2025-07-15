const infoIcon =
  '<img src="./assets/images/icon-info.svg" alt="File Info" class="icon-info"/> ';

document
  .getElementsByClassName("file-upload")[0]
  .addEventListener("click", function () {
    document.getElementsByClassName("file-input")[0].click();
  });

document
  .getElementsByClassName("file-input")[0]
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const avatarMessage = document.getElementById("avatar-message");
    const uploadIcon = document.getElementsByClassName("icon-upload")[0];
    if (file) {
      if (file.size > 500 * 1024) {
        avatarMessage.innerHTML =
          infoIcon + "File too large. Please upload a photo than 500KB.";
        avatarMessage.style.color = "red";
        uploadIcon.src = "./assets/images/icon-upload.svg";
        event.target.value = "";
        return;
      }
      avatarMessage.innerHTML =
        infoIcon + "Upload your photo (JPG or PNG, max size: 500KB).";
      avatarMessage.style.color = "hsl(252, 6%, 83%)";
      const reader = new FileReader();
      reader.onload = function (e) {
        uploadIcon.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("name").value.trim();
  const emailInput = document.getElementById("email").value.trim();
  const githubInput = document.getElementById("github").value.trim();
  const file = document.querySelector(".file-input").files[0];

  const avatarMessage = document.getElementById("avatar-message");
  const nameMessage = document.getElementById("name-message");
  const emailMessage = document.getElementById("email-message");
  const githubMessage = document.getElementById("github-message");

  let hasError = false;

  if (!file) {
    avatarMessage.innerHTML = infoIcon + "Please upload your photo.";
    avatarMessage.style.color = "red";
    hasError = true;
  } else {
    avatarMessage.innerHTML = infoIcon + "Upload your photo (JPG or PNG, max size: 500KB).";
    avatarMessage.style.color = "hsl(252, 6%, 83%)";
  }
  if (!nameInput) {
    nameMessage.innerHTML = infoIcon + "Please enter your name.";
    nameMessage.style.color = "red";
    hasError = true;
  } else {
    nameMessage.innerHTML = null;
    nameMessage.style.color = "hsl(252, 6%, 83%)";
  }
  if (!emailInput) {
    emailMessage.innerHTML = infoIcon + "Please enter your email.";
    emailMessage.style.color = "red";
    hasError = true;
  } else {
    emailMessage.innerHTML = null;
    emailMessage.style.color = "hsl(252, 6%, 83%)";
  }
  if (!githubInput) {
    githubMessage.innerHTML = infoIcon + "Please enter your GitHub username.";
    githubMessage.style.color = "red";
    hasError = true;
  } else {
    githubMessage.innerHTML = null;
    githubMessage.style.color = "hsl(252, 6%, 83%)";
  }
  if (hasError) {
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const params = new URLSearchParams({
      name: nameInput,
      email: emailInput,
      github: githubInput,
      avatar: e.target.result
    });
    window.location.href = `ticket.html?${params.toString()}`;
  };
  reader.readAsDataURL(file);
});
