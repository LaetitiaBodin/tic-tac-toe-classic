root.innerHTML += `
    <div id="wrapper">
        <h1>TIC-TAC-TOE</h1>
        <div id="board">
        </div>
        <div id="info">
        <p id="player">TURN: PLAYER 1</p>
        </div>
    </div>`

for (let i = 0; i < 9; i++) { board.innerHTML += `<canvas id="canvas_${i}" height="150" width="150"></canvas>` }