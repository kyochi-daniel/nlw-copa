function createGame(player1, hour, player2){
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
  </li>`
}


let delay = -.2 
function createCard(date, day, games) {
  delay = delay + .2
  return `
  <div class="card" style='animation-delay: ${delay}s'>
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}       
    </ul>
  </div>`
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="Logo da NLW">
  </header>
  <main id="cards">
    ${createCard("24/11", "quinta", createGame("suecia", "07:00", "camaroes")
    + createGame("uruguai", "10:00", "coreia")
    + createGame("portugal", "13:00", "gana") + createGame("brazil", "16:00", "serbia"))}
    ${createCard("28/11", "segunda", createGame("camaroes", "07:00", "serbia") + createGame("coreia", "10:00", "gana")
    + createGame("brazil", "13:00", "suecia") + createGame("portugal", "16:00", "uruguai"))}
  </main>`