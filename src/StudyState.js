import React, { useState } from "react";

const Say = ({clicktest}) => {
    const [message, setMessage] = useState('hello?');
    const onClickEnter = () => setMessage('안녕하세욤?');
    const onClickLeave = () => {
        setMessage('잘가세욤');
        console.log("test");
    }

    const [ color, setcolor] = useState('black');
    const [arrays , setarrays] = useState({a: 1, b:2});

    return (
    <div>
        <button onClick={onClickEnter}> 입장 </button>
        <button onClick={onClickLeave}> 퇴장 </button>
        <h1 style={{color}} >{message} </h1>
        <button style= {{color: 'red'}} onClick={() => setcolor ('red')}>
            빨간색
        </button>
        <button style= {{color: 'green'}} onClick={() => setcolor ('green')}>
            초록색
        </button>
        <button style= {{color: 'blue'}} onClick={() => setcolor ('blue')}>
            파란색
        </button>
        <button  onClick={() => clicktest}>
            Props 테스트
        </button>
        

        <p> {arrays.a} <br/> {arrays.b} </p>

        <button onClick={() => setarrays ({a: 5 , b: 12}) }>
            파란색
        </button>
         </div>
         );
}

export default Say