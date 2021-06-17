export function showToast({ status = "success", title = "", description }) {
  let snackbar = document.getElementById("snackbar");
  switch (status) {
    case "error":
      snackbar.style.backgroundColor = "red";
      break;
    case "warning":
      snackbar.style.backgroundColor = "yellow";
      break;
    default:
      break;
  }

  let titleElement = document.getElementById("toast-title");
  titleElement.innerHTML = title;

  let descriptionElement = document.getElementById("toast-description");
  descriptionElement.innerHTML = description;
  
  snackbar.className = "show";
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}
