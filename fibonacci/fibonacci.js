let fibonacci = [1, 1];
let results = " ";

const laskuri = () => {
  while (Math.max(...fibonacci) < 1000) {
    //Haetaan listan suurin numero
    const max = Math.max(...fibonacci);

    if (max < 2) {
      // Etsitään toisiksi suurin numero ja rajataan hakualue
      const secondMax = Math.max(...fibonacci.slice(0, 1));
      // Lisätään uusi luku listaan
      fibonacci.push(max + secondMax);

      //   console.log(fibonacci);
      //   console.log("Suurin luku:" + Math.max(...fibonacci));
      //   console.log("Toiseksi suurin luku:" + Math.max(...fibonacci.slice(0, 1)));

      //tekstien kirjoitus näytettäväksi
      results += "<br>" + Math.max(...fibonacci);
      document.getElementById("result").innerHTML = results;
    } else {
      // Lasketaan toiseksi suurin numero
      // Slice rajaa hakualueen
      // indexOf poissulkee suurimman numeron
      const secondMax = Math.max(...fibonacci.slice(0, fibonacci.indexOf(max)));

      // Lisätään uusi luku listaan
      fibonacci.push(max + secondMax);

      // Tulosten kirjoitus
      document.getElementById("result").innerHTML =
        Math.max(...fibonacci) + "<br>";

      //   console.log(fibonacci);
      //   console.log("Suurin luku:" + Math.max(...fibonacci));
      //   console.log(
      //     "Toiseksi suurin luku:" +
      //       Math.max(
      //         ...fibonacci.slice(0, fibonacci.indexOf(Math.max(...fibonacci)))
      //       )
      //   );

      //Tulosten kirjoitus
      results += "<br>" + Math.max(...fibonacci);
      document.getElementById("result").innerHTML = results;
    }
  }
};
