/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   function dominios() {
//     let pronoun = ["the", "our", "it", "he", "she"];
//     let adj = ["great", "big", "small", "dangerous", "blue", "pink"];
//     let noun = ["jogger", "racoon", "dog", "driver", "comedian"];
//     let fin = [".com", ".es", ".us", ".it"];

//     let proIndex = Math.floor(Math.random() * pronoun.length);
//     let adjIndex = Math.floor(Math.random() * adj.length);
//     let nounIndex = Math.floor(Math.random() * noun.length);
//     let finalIndex = Math.floor(Math.random() * fin.length);

//     return (
//       pronoun[proIndex] + adj[adjIndex] + noun[nounIndex] + fin[finalIndex]
//     );
//   }
//   document.querySelector("#boton").addEventListener("click", () => {
//     document.querySelector("#dominios").innerHTML = dominios();
//   });
// };
let dominio;

window.onload = function() {
  function dominios() {
    let pronoun = ["the", "our", "it", "he", "she"];
    let adj = ["great", "big", "small", "dangerous", "blue", "pink"];
    let noun = ["jogger", "racoon", "dog"];
    let fin = [".com", ".es"];

    for (let a of pronoun) {
      for (let b of adj) {
        for (let c of noun) {
          for (let d of fin) {
            // console.log(a + b + c + d);
            dominio += a + b + c + d + "--";
            console.log(dominio);
          }
        }
      }
    }
    return dominio;
  }
  document
    .querySelector("#boton")
    .addEventListener(
      "click",
      () => (document.querySelector("#dominios").innerHTML = dominios())
    );
};
