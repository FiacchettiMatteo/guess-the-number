document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  //ricorda event.target --> Ottengo informazioni sull'elemento che ha generato l'evento
  console.log(event);

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;

  console.log("Utente ha inserito username: " + username);
  console.log("Email ha inserito email: " + email);

  /**
   * Qui andrebbe invio verso un Backend remoto con metodo POST (domani :) )
   */

  // Caso 1 --> Aggiorno i miei dati in pagina
  document.getElementById("updatedUsername").innerHTML = username;
  document.getElementById("updatedEmail").innerHTML = email;

  // Caso 2 --> Redirect verso pagina di riepilogo/feedback (più realistico)
  let relativePath = `feedback.html?username=${username}&email=${email}`; 
  window.location.href = relativePath; // --> Sarebbe come dire "Vai sull'indirizzo root della pagina e incollaci /feedback.html (indirizzo relativo)"

  // Caso 3 --> Come gestire richieste verso un backend alternativo / Servizio REST
});
