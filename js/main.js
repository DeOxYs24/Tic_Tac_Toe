import Game from './Game.js'
import GameView from './GameView.js'

let game = new Game();
let gameView = new GameView();

// gameView.updateBoard(game);

// console.log("My turn is ", game.turn);
// game.nextTurn();
// console.log("My turn is ", game.turn);
// game.makeMove(3);
// console.log(game.board);
// game.nextTurn();
// game.makeMove(8);
// console.log(game.board);
// game.nextTurn();
// console.log(game.board);

// gameView.updateBoard(game);

document.querySelector(".restart").addEventListener("click", () =>{
    // console.log("New Game");
    onRestartClick();
})

let tiles = document.querySelectorAll(".board-tile");
// console.log(tiles);
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        // console.log(tile.dataset.index);
        // console.log("tiles clicked");
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    //do something
    game.makeMove(i);
    // make a move
    gameView.updateBoard(game);
    //change turn
    // game.nextTurn();
    //update board
}

function onRestartClick(){
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);