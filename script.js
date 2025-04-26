const appleObj = {
    apple1: "Ich liebe dich",
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
  
  function outputText(buttonId) {
    console.log("Button", buttonId, "wurde geklickt");
    console.log("Text:", appleObj[buttonId]); // Den Text des entsprechenden Apfels anzeigen
    alert(appleObj[buttonId]); // Hier kannst du auch den Text in einem Popup anzeigen lassen
  }
  
  apples.forEach(button => {
    button.addEventListener('click', () => {
      outputText(button.id); // Gib die ID des angeklickten Apfels an die Funktion weiter
    });
  });
  