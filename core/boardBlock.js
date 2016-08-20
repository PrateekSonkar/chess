/**
 * Created by prateek on 18/8/16.
 * Basic block of chess board;
 */

function boardBlock(color,position,piece){
    console.log("boardBlock : was called !!" + color + " " + position);
    this.blockColor = color;
    this.blockPosition = position;
    this.blockPiece = piece;
};

module.exports = boardBlock;