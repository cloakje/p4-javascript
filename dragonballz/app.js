let output = document.querySelector(".output");
let out = "";
fetch("https://dragonball-api.com/api/characters")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.items);
    for (let d of data.items){
      

      out += `
      <h1> ${d.name}</h1>
      <img src="${d.image}"/>`
    }
    output.innerHTML = out;
  });
