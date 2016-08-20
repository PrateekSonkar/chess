/*
Author : Prateek;
Description : This is function to create a chessboard

 */

var boardBlock = require('./boardBlock');
var chessPieces = require('./chessPieces');
var pieces = ['rook','knight','bishop','queen','king','bishop','knight','rook'];
var chessBoard = {};

chessBoard.generateBoard = function(){
    var boardLength = 8,
        boardBreadth = 8,
        board = new Array();
    for(var length = 0;length < boardLength;length++){
        board[length] = new Array();
        for(var breadth = 0;breadth < boardBreadth;breadth++){
            var color = ((length+breadth)%2 == 0) ? "white" : "black";
            if(length == 0){
                board[length][breadth] = new boardBlock(color,{l:length,b:breadth},new chessPieces(pieces[breadth],'black'));
            }
            else if(length == 1) {
                board[length][breadth] = new boardBlock(color,{l:length,b:breadth},new chessPieces('pawn','black'));
            }
            else if(length == 7) {
                board[length][breadth] = new boardBlock(color,{l:length,b:breadth},new chessPieces(pieces[breadth],'white'));
            }
            else if(length == 6){
                board[length][breadth] = new boardBlock(color,{l:length,b:breadth},new chessPieces('pawn','white'));
            } else {
                board[length][breadth] = new boardBlock(color,{l:length,b:breadth},new chessPieces());
            }
        }
    }
    console.log("Board is : " + JSON.stringify(board));
    return board;
};

module.exports = chessBoard;