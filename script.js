function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("show");
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("navMenu");

    if (nav) {
      nav.classList.remove("show");
    }
  });
});

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const whatsappNumber = "919116007402";

  const text =
    "Hello SK Digital Studio,%0A%0A" +
    "Name: " + encodeURIComponent(name) + "%0A" +
    "Email: " + encodeURIComponent(email) + "%0A" +
    "Subject: " + encodeURIComponent(subject) + "%0A" +
    "Message: " + encodeURIComponent(message);

  window.open(
    "https://wa.me/" + whatsappNumber + "?text=" + text,
    "_blank"
  );
}
