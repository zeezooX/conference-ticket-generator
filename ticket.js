const params = new URLSearchParams(window.location.search);

document.getElementsByClassName("ticket-name")[0].textContent =
  params.get("name") || "No Name";
document.getElementsByClassName("ticket-name")[1].textContent =
  params.get("name") || "No Name";
document.getElementsByClassName("ticket-email")[0].textContent =
  params.get("email") || "No Email";
document.getElementsByClassName("ticket-github")[0].innerHTML =
  '<img src="./assets/images/icon-github.svg" alt="GitHub Logo" class="github-logo"/>' +
    params.get("github") || "No GitHub";

document.getElementsByClassName("ticket-avatar")[0].src =
  params.get("avatar") || "./assets/images/image-avatar.jpg";
