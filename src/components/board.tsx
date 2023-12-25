import React, { useEffect, useState } from 'react';

interface MyComponentProps {
  length: number;
  pieces: String[];
  piecePositions: [number, number][];

}

function PlacePiece(){
 
}

const Board: React.FC<MyComponentProps> = (props) => {
    const [Board, setBoard] = useState(()=> {
        const Board: String[][] = [];
        for (let i = 0; i < props.length; i++) {
            Board[i] = new Array<String>(props.length).fill("");
        }
        
        for(let i = 0; i < props.piecePositions.length; i++){
            const position = props.piecePositions[i];
            var piece = props.pieces[i].split("/").pop()?.split(".")[0];
            if(piece){
                Board[position[0]][position[1]] = piece;
            }
        }

        return Board; 
    })


    console.log(Board)
    const boardSquares = []
    const pieces = []
    
    pieces.push(<div key='1' className=''></div>)
    for(let i = 0; i < props.length; i++){
        // const row = []
        for(let j = 0; j < props.length; j++){
            if((i + j) % 2 == 0){
                boardSquares.push(<div key={i * props.length + j} className="board-square-even"></div>)
            }
            else{
                boardSquares.push(<div key={i * props.length + j} className="board-square-odd"></div>)
            }   
        }
    }
    console.log(props.piecePositions)


  return (
    <>
        <div className="board">
        {boardSquares}
        {pieces}   
        </div>
    </>
  );
};

export default Board;