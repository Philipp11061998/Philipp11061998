

//Was ich an dir liebe!:
const appleObj = {
    apple1: "Apfel 1 von 10:\n\nHallo mein Engel,\ndas ist Apfel 1 von 10. Ich möchte dich auf eine Reise mitnehmen, auf welcher ich dir gestehe, wie sehr ich dich liebe. Ich möchte dich an Geschichten erinnern, und dir das Gefühl vermitteln, welches ich beim Bauen dieser Website empfunden habe.\n\nIch liebe dich einfach über alles und hoffe, dass dir das Ganze gefällt.\nDein Ehemann!",
    apple2: "",
    apple3: "Apfel 3 von 10:\n\nHier habe ich mir etwas überlegt. Wie du siehst, sind dort unten 6 Karten.\nHier ist dein MEMORY Geschick gefragt 😍\n\nDas ist das was so lange gedauert hat",
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

const cardObj = {
  card1: {
    img: "./pic/20250223_120810.jpg",
    alt: "Stoned auf dem Balkon.",
  },
  card2: {
    img: "./pic/FB_IMG_1743881655983.jpg",
    alt: "Wir beide bei dem first Look.",
  }, 
  card3: {
    img: "./pic/alle Tiere Hintergrund.jpg",
    alt: "Alle Tieris.",
  }, 
  card4: {
    img: "./pic/20250223_120810.jpg",
    alt: "Stoned auf dem Balkon.",
  },
  card5: {
    img: "./pic/alle Tiere Hintergrund.jpg",
    alt: "Alle Tieris.",
  }, 
  card6: {
    img: "./pic/FB_IMG_1743881655983.jpg",
    alt: "Wir beide bei dem first Look.",
  }, 
}

const apples = document.querySelectorAll(".apple");
let firstApple = true;

function openLightbox(content) {
  const lightbox = document.getElementById('lightbox');
  const textContent = document.getElementById('text-content');
  const memoryContainer = document.getElementById('memoryContainer');

  lightbox.style.display = 'flex';

  if (content.startsWith("Apfel 3 von 10:") && memoryContainer) {
    memoryContainer.style.display = 'flex';
  } else {
    memoryContainer.style.display = 'none'; // Falls anderer Apfel, Memory verstecken
  }

  const htmlContent = content.replace(/\n/g, '<br>');
  textContent.innerHTML = htmlContent;
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxText = document.getElementById("lightbox-text");
  const memoryContainer = document.getElementById('memoryContainer');

  if (lightbox) {
    lightbox.style.display = "none";
  }

  if (memoryContainer) {
    memoryContainer.style.display = 'none';
  }

  if (firstApple) {
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

const cards = document.querySelectorAll(".card");

let memoryCardCounter = 0;
let memorySolvedCounter = 0;
let firstCard = null;
let secondCard = null;

cards.forEach(card => {
  card.addEventListener("click", () => {
    // Verhindern, dass auf die Karte geklickt wird, wenn sie bereits umgedreht ist
    if (memoryCardCounter < 2 && !card.classList.contains("flipped")) {
      const cardFront = card.querySelector(".card-front");
      const cardBack = card.querySelector(".card-back");

      // Zeige die Vorderseite an, blende die Rückseite aus
      cardFront.style.display = "block";
      cardBack.style.display = "none";
      card.classList.add("flipped"); // Markiere die Karte als umgedreht

      if (memoryCardCounter === 0) {
        // Die erste Karte
        firstCard = card;
        memoryCardCounter++;
      } else if (memoryCardCounter === 1) {
        // Die zweite Karte
        secondCard = card;
        memoryCardCounter++;

        // Überprüfe, ob die 'src' der Bilder gleich sind
        const firstCardImage = firstCard.querySelector(".card-front img").src;
        const secondCardImage = secondCard.querySelector(".card-front img").src;

        if (firstCardImage === secondCardImage) {
          console.log("Die Karten stimmen überein!");
          // Die Karten stimmen überein, setze sie in einen "abgeglichenen" Zustand (z.B. keine Rückseite mehr zeigen)
          firstCard.removeEventListener("click", card.click);
          secondCard.removeEventListener("click", card.click);

          memorySolvedCounter++;

          // Setze die Karten für die nächste Auswahl zurück
          firstCard = null;
          secondCard = null;
          memoryCardCounter = 0;
        } else {
          console.log("Die Karten stimmen nicht überein!");
          // Die Karten stimmen nicht überein, blende sie nach einer Verzögerung zurück
          setTimeout(() => {
            firstCard.querySelector(".card-front").style.display = "none";
            firstCard.querySelector(".card-back").style.display = "block";
            secondCard.querySelector(".card-front").style.display = "none";
            secondCard.querySelector(".card-back").style.display = "block";
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");

            // Setze die Karten für die nächste Auswahl zurück
            firstCard = null;
            secondCard = null;
            memoryCardCounter = 0;
          }, 1000); // Warte 1 Sekunde, bevor die Rückseiten wieder angezeigt werden
        }
      }

      if (memorySolvedCounter === 3){
        changeMemoryLightBox();
      }
    }
  });
});

function changeMemoryLightBox() {
  
  document.getElementById("memoryContainer").style.display = "none";

  const textContent = document.getElementById("text-content");

  textContent.innerHTML = "Apfel 3 von 10:<br><br>Wow! Du hast es gelöst. Ich liebe dich mein Engel ❤";
}
