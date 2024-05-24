let output = document.querySelector(".output");
let out = "";
fetch("https://restcountries.com/v3.1/all/")
  .then((response) => response.json())
  .then((data) => {
    for (let d of data) {
      console.log(d.flags.png);

      out += `
        <h1> ${d.name.common}</h1>
        <img src=${d.flags.png} />;`
    }
    output.innerHTML = out;
  });
