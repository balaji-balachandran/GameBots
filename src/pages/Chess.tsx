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
import { useEffect, useState } from 'react'

const initialBoard = [
    [ 3,  5,  7,  9, 11,  7,  5,  3],
    [ 1,  1,  1,  1,  1,  1,  1,  1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [ 2,  2,  2,  2,  2,  2,  2,  2],
    [ 4,  6,  8, 10, 12,  8,  6,  4],
  ]; 
  
export default () =>{
    const [board, setBoard] = useState(initialBoard);

    const BOARD_SIZE = 8;
    var pieces : string[] = []
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
    pieces.push(lightRook);
    pieces.push(lightKnight);
    pieces.push(lightBishop);
    pieces.push(lightQueen);
    pieces.push(lightKing);
    pieces.push(lightBishop);
    pieces.push(lightKnight);
    pieces.push(lightRook);
    
    const [piecePositions, setPiecePositions] = useState<[number, number][]>(() => {
        const positions: [number, number][] = [];
        const initializedRows: number[] = [0, 1, BOARD_SIZE - 2, BOARD_SIZE - 1];
    
        for (let i = 0; i < initializedRows.length; i++) {
          for (let j = 0; j < BOARD_SIZE; j++) {
            positions.push([initializedRows[i], j]);
          }
        }
        return positions;
      });

    const updatePositionAtIndex = (index: number, newPosition: [number, number]) => {
        setPiecePositions(prevPositions => {
            const updatedPositions = [...prevPositions]; // Create a copy of the original array
            updatedPositions[index] = newPosition; // Update the specific index with the new value
            return updatedPositions; // Set the state with the modified array
        });
    };
    
    const [selected, setSelected] = useState<number>(NaN);
    const [lastSelected, setLastSelected] = useState<number>(NaN);

    // Handles move from the player
    useEffect(()=>{
        // If lastSelected is none, no piece was selected previously
        if(lastSelected < 1000){
    
            var toMoveRow = selected > 1000 ? Math.floor((selected % 1000) / BOARD_SIZE) : piecePositions[selected][0];
            var toMoveCol = selected > 1000 ? (selected % 1000) % BOARD_SIZE : piecePositions[selected][1];
            
            updatePositionAtIndex(lastSelected, [toMoveRow, toMoveCol]);
        }
    }, [selected])

    const onInteract = (userSelected: number) => {
        // Receive data from the child component and update state in the parent
        
        setLastSelected(selected);
        setSelected(userSelected);

    };

    const generateMoves = (pieceIndex : number) => {
        
        return 1;
    }
    
    return <Board length={BOARD_SIZE} pieces={pieces} piecePositions={piecePositions} onInteract = {onInteract}>
        
    </Board>

}