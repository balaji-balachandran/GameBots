import React from 'react';

interface MyComponentProps {
  length: number;
}

const MyComponent: React.FC<MyComponentProps> = (props) => {
    // const divElements = Array.from({ length }, (_, index) => (
    //     <div key={index} className="board-square">{index + 1}</div>
    // ));
    
    const divElements = []
    
    function MoveCircle(){
        let circle = document.getElementById('first')

        let iIn = prompt("X-position", '0');
        var jIn = prompt("Y-position", '0');
        var i : number = 0;
        var j : number = 0;
        if(iIn && jIn){
            i = parseInt(iIn);
            j = parseInt(jIn);
        }
        let xTranslate = 12.5 * i;
        let yTranslate = 12.5 * j;
        if(circle){
            circle.style.left = `${xTranslate}%`;
            circle.style.top = `${yTranslate}%`;
        }
    }

    for(let i = 0; i < props.length; i++){
        // const row = []
        for(let j = 0; j < props.length; j++){
            if((i + j) % 2 == 0){
                divElements.push(<div key={i * props.length + j} className="board-square-even"></div>)
            }
            else{
                divElements.push(<div key={i * props.length + j} className="board-square-odd"></div>)
            }
            
        }
        // divElements.push(row)
    }


  return (
    <>
        <div className="board">
        
        {divElements}
        <div className='circle' id={`${props.length}`} onMouseOver={MoveCircle}></div>
        </div>
        <button onClick={MoveCircle}>Hello</button>
    </>
  );
};

export default MyComponent;