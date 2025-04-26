

//Was ich an dir liebe!:
const appleObj = {
    apple1: "Hallo mein Engel,\ndas ist Apfel 1 von 10. Ich möchte dich auf eine Reise mitnehmen, auf welcher ich dir gestehe, wie sehr ich dich liebe. Ich möchte dich an Geschichten erinnern, und dir das Gefühl vermitteln, welches ich beim Bauen dieser Website empfunden habe.\n\nIch liebe dich einfach über alles und hoffe, dass dir das Ganze gefällt.\nDein Ehemann!",
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
let counter = 0;

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
  document.getElementById(button.id).style.backgroundColor = 'gray';

    // Zusätzlich eine CSS-Klasse erstellen und anhängen für ::before und ::after
    const style = document.createElement('style');
    style.innerHTML = `
      #apple1::before, 
      #apple1::after {
        background-color: gray;
      }
    `;
    document.head.appendChild(style);
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
