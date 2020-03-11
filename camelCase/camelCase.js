function camelCaser() {
  const textToConvert = document.getElementById("textToConvert").value;

  const camelCased = textToConvert
    // Pilkkotaan kentän arvo osiin ja luodaan sisällöstä array
    .split(" ")
    //Sisältöä käsitellään yksilöllisesti mapin avulla
    .map((word, i) => {
      // Arrayn ensimmäinen objekti muutetaan pienellä kirjoitetuksi
      if (i === 0) return word.toLowerCase();
      // Objektin ensimmäinen kirjain muutetaan isoksi ja slicella kirjaimet toisesta kirjaimesta eteenpäin pieniksi
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    // Lopuksi vielä yhdistetään kaikki ilman erottajaa
    .join("");
  document.getElementById("result").innerHTML = camelCased;
}
