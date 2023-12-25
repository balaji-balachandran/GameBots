import Board from '../components/board'

import lightPawn from './../assets/sprites/LightPawn.webp'
import lightBishop from './../assets/sprites/LightBishop.webp'
import lightKnight from './../assets/sprites/LightKnight.webp'
import lightRook from './../assets/sprites/LightRook.webp'
import lightQueen from './../assets/sprites/LightQueen.webp'
import lightKing from './../assets/sprites/LightKing.webp'

import darkPawn from './../assets/sprites/DarkPawn.webp'
import darkBishop from './../assets/sprites/DarkBishop.webp'
import darkKnight from './../assets/sprites/DarkKnight.webp'
import darkRook from './../assets/sprites/DarkRook.webp'
import darkQueen from './../assets/sprites/DarkQueen.webp'
import darkKing from './../assets/sprites/DarkKing.webp'



export default () =>{
    const BOARD_SIZE = 8;
    var pieces : String[] = []
    // Insert Dark Pieces 
    pieces.push(darkRook);
    pieces.push(darkKnight);
    pieces.push(darkBishop);
    pieces.push(darkQueen);
    pieces.push(darkKing);
    pieces.push(darkBishop);
    pieces.push(darkKnight);
    pieces.push(darkRook);

    // Add Dark Pawns
    for(let i = 0; i < BOARD_SIZE; i++) pieces.push(darkPawn);
    
    // Add Light Pawns
    for(let i = 0; i < BOARD_SIZE; i++) pieces.push(lightPawn);
    
    // Add Light Pieces
    pieces.push(darkRook);
    pieces.push(darkKnight);
    pieces.push(darkBishop);
    pieces.push(darkQueen);
    pieces.push(darkKing);
    pieces.push(darkBishop);
    pieces.push(darkKnight);
    pieces.push(darkRook);
    
    var piecePositons : [number, number][] = []
    var rows : number[] = [0,1,BOARD_SIZE - 2, BOARD_SIZE - 1];
    for(let i = 0; i < rows.length; i++){
        for(let j = 0; j < BOARD_SIZE; j++){
            piecePositons.push([rows[i], j])
        }
    }
    
    return <Board length={BOARD_SIZE} pieces={pieces} piecePositions={piecePositons}>
        
    </Board>

}