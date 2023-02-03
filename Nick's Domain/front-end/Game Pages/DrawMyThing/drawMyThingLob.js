const joinButton = document.querySelector(".join");
const lobbyForm = document.querySelector("#lobby-form");

joinButton.addEventListener("click", function() {
  if (joinButton.textContent === "Join Lobby") {
    joinButton.textContent = "Cancel";
    lobbyForm.style.display = "block";
  } else {
    joinButton.textContent = "Join Lobby";
    lobbyForm.style.display = "none";
  }
});