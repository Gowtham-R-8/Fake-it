let players = [];

function addPlayer() {
    const input = document.getElementById("playerName");
    const name = input.value.trim();

    if (name === "") {
        alert("Please enter a player name.");
        return;
    }

    players.push(name);

    const playerList = document.getElementById("players");

    playerList.innerHTML =
        "<strong>Players:</strong> " + players.join(", ");

    input.value = "";
}

function startGame() {
    if (players.length < 2) {
        alert("Please add at least two players.");
        return;
    }

    const imposters = document.getElementById("imposters").value;
    const rounds = document.getElementById("rounds").value;
    const category = document.getElementById("category").value;

    document.getElementById("message").innerText =
        "Game started! " +
        players.length +
        " players, " +
        imposters +
        " imposter(s), " +
        rounds +
        " round(s), Category: " +
        category;
}