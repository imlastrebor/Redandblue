// ANTAA VIRHEEN
// window.addEventListener("load", function() {
//
//   return fetch(`http://loripsum.net/api`, {
//     mode: "cors"
//   })
//     .then(res => res.json())
//     .then(data => console.log(data));
// });

window.addEventListener("load", function() {
  return fetch("http://ip-api.com/json")
    .then(response => response.json())
    .then(data => {
      console.log(data),
        (document.getElementById("result").innerHTML =
          data.country + "<br>" + data.city + "<br>" + data.zip);
    });
});
