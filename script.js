//Was ich an dir liebe!:
const appleObj = {
    apple1: "Ich liebe deine atemberaubend schönen grünen Augen! Die mich seit dem ersten Tag in meinen Gedanken begleiten. Die Augen, in welchen ich pure Sicherheit, Liebe und Unterstützung finde. Die mir auch an jedem noch so trostlosen Tag Farbe und Freude bringen können.",
    apple2: "",
    apple3: "",
    apple4: "",
    apple5: "",
    apple6: "",
    apple7: "",
    apple8: "",
    apple9: "",
    apple10: "",
    apple11: "",
    apple12: "",
    apple13: "",
    apple14: "",
    apple15: "",
    apple16: "",
    apple17: "",
    apple18: "",
    apple19: "",
    apple20: ""
  };

const apples = document.querySelectorAll(".apple");

function openLightbox(text) {
  const lightbox = document.getElementById("lightbox");
  const lightboxText = document.getElementById("lightbox-text");

  lightboxText.innerText = text;
  lightbox.style.display = "flex"; // Lightbox sichtbar machen
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

apples.forEach(button => {
  button.addEventListener('click', () => {
    openLightbox(appleObj[button.id]);
  });
});

document.getElementById("close-button").addEventListener("click", closeLightbox);

// Optional: Klick außerhalb schließt auch
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") {
    closeLightbox();
  }
});
