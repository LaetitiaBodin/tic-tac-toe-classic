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

document.querySelectorAll('canvas').forEach((item, idx) => item.addEventListener('click', () => {
    if (!gameOver && !moves[idx]) {
        counter++
        if (counter % 2 === 1) {
            line(idx)
            moves[idx] = 'X'
            player.innerHTML = 'TURN: PLAYER 2'
        } else if (counter % 2 === 0) {
            circle(idx)
            moves[idx] = 'O'
            player.innerHTML = 'TURN: PLAYER 1'
        }
    }
}))

let gameOver = false
let counter = 0
let moves = []

function line (id) {
    let ctx = document.getElementById(`canvas_${id}`).getContext('2d')
    setTimeout(() => {
        ctx.beginPath()
        ctx.strokeStyle = '#3d5a80'
        ctx.lineCap = 'round'
        ctx.lineWidth = 20
        ctx.moveTo(30, 30)
        for (let i = 0; i <= 90; i++) {
            setTimeout(() => {
                ctx.lineTo(30 + i, 30 + i)
                ctx.stroke()
            }, i * 3, i)
        }
    }, 0)
    setTimeout(() => {
        ctx.beginPath()
        ctx.strokeStyle = '#3d5a80'
        ctx.lineCap = 'round'
        ctx.lineWidth = 20
        ctx.moveTo(120, 30)
        for (let i = 0; i <= 90; i++) {
            setTimeout(() => {
                ctx.lineTo(120 - i, 30 + i)
                ctx.stroke()
            }, i * 3, i)
        }
    }, 300)
}

function circle (id) {
    let ctx = document.getElementById(`canvas_${id}`).getContext('2d')
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            ctx.beginPath();
            ctx.fillStyle = '#ee6c4d'
            ctx.moveTo(75, 75)
            ctx.arc(75, 75, 55,  Math.PI * 1.5 , Math.PI * 1.5 - i / Math.PI / 5, true)
            ctx.moveTo(75, 75)
            ctx.fill()
            ctx.beginPath();
            ctx.fillStyle = '#e0fbfc'
            ctx.moveTo(75, 75)
            ctx.arc(75, 75, 35,  Math.PI * 1.5 , Math.PI * 1.5 - i / Math.PI / 5, true)
            ctx.moveTo(75, 75)
            ctx.fill()
        }, i * 6, i)
    }  
}