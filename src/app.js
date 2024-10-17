/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "his", "her", "their", "it"];
  let adj = ["great", "big", "small", "fat", "pretty", "beautiful"];
  let noun = ["jogger", "racoon", "cat", "king", "princess", "mermaid"];

  pronoun.forEach(articulo => {
    adj.forEach(adjetivo => {
      noun.forEach(sujeto => {
        console.log(articulo + adjetivo + sujeto + ".com");
      });
    });
  });
  console.log("Hello Rigo from the console!");
};
