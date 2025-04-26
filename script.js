

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
let firstApple = true;

function openLightbox(text) {
  const lightbox = document.getElementById("lightbox");
  const lightboxText = document.getElementById("lightbox-text");

  lightboxText.innerText = text;
  lightbox.style.display = "flex"; // Lightbox sichtbar machen
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";

  if (firstApple){
    makeAppleAppear();
    firstApple = false;
  }

}

apples.forEach(button => {
  button.addEventListener('click', () => {
    changeAppleBackground(button);
    openLightbox(appleObj[button.id]);
  });
});

document.getElementById("close-button").addEventListener("click", closeLightbox);

// Klick außerhalb schließt auch
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") {
    closeLightbox();
  }
});

function makeAppleAppear() {
  apples.forEach(apple => {
    if (apple.id === "apple1") {
      return; // Apfel 1 bleibt wie er ist
    }
    apple.style.display = "block"; // Direkt auf das Element anwenden
  });
}

function changeAppleBackground(button){
  document.getElementById(button.id).style.backgroundColor = 'gray';

  // Zusätzlich eine CSS-Klasse erstellen und anhängen für ::before und ::after
  const style = document.createElement('style');
  style.innerHTML = `
    #${button.id}::before, 
    #${button.id}::after {
      background-color: gray;
    }
  `;
  document.head.appendChild(style);
}