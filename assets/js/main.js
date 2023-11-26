function togglePopup() {
  var popup = document.getElementById("popup");
  if (popup.style.display === "none" || popup.style.display === "") {
    popup.style.display = "block";
    overlay.style.display = "none";
  } else {
    popup.style.display = "none";
    overlay.style.display = "none";
  }
}

