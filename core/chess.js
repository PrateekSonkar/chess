
var chessBoard = require('./chessboard');



function chessGame(){
    var board = chessBoard.generateBoard();
    console.log(JSON.stringify(board));
}

chessGame();