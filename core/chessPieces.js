/**
 * Created by prateek on 18/8/16.
 * Chess pieces
 */


function chessPieces(piecesType,piecesColor){
    this.type = !piecesType ? "null" : piecesType;
    this.color = !piecesColor ? "null" : piecesColor;

    console.log("type & color " + this.type +" " + this.color);
}







module.exports = chessPieces;