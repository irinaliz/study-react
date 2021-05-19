import React, { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState('hello?');
    const onClickEnter = () => setMessage('안녕하세욤?');
    const onClickLeave = () => setMessage('잘가세욤');

    return (<div>
        <button onClick={onClickEnter}> 입장 </button>
        <button onClick={onClickLeave}> 퇴장 </button>
        {message}
         </div>)
}

export default Say