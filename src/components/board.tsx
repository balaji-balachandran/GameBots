import React, { useEffect } from 'react';

interface MyComponentProps {
  length: number;
  pieces: string[];
  piecePositions: [number, number][];
  onInteract: (userSelected: number) => void
}

const Board: React.FC<MyComponentProps> = (props) => {

    // Place pieces
    useEffect(() => {
        for(let i = 0; i < props.pieces.length; i++){
            const piece = document.getElementById(`${i}`)
            const position = props.piecePositions[i]
            if(piece){
                piece.style.top = `${12.5 * position[0]}%`;
                piece.style.left = `${12.5 * position[1]}%`;
            }
        };
      }, [props.piecePositions]);
    


    const boardSquares = []
    
    for(let i = 0; i < props.length; i++){
        for(let j = 0; j < props.length; j++){
            if((i + j) % 2 == 0){
                boardSquares.push(<div key={1000 + i * props.length + j} className="board-square-even" onClick={()=>{props.onInteract(1000 + i * props.length + j)}}></div>)
                
            }
            else{
                boardSquares.push(<div key={1000 + i * props.length + j} className="board-square-odd" onClick={()=>{props.onInteract(1000 + i * props.length + j)}}></div>)
            }   
        }
    }

  return (
    <div className="board">
        {boardSquares}
        {props.pieces.map((image, index) => (
            <img key={index} className="chess-piece" id={`${index}`} src={image} onClick={()=>{props.onInteract(index);}}/>
        ))}
    </div>
  );
};

export default Board;