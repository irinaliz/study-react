import React , {useState} from "react";

const EventPractice = () => {
    const [username , setUsername] = useState('');
    const [message , setmessage] = useState('');

    const onChangeusername = e => {
        console.log("Change : "+ username)
        setUsername(e.target.value);
        console.log("Changed : " + e.target.value)
    }
    const onChangeMessage = e => setmessage(e.target.value);
    const onClick = () => {
        alert (username + " : " + message);
        setUsername(''); // 왜 벨류에 유저네임을 넣냐면, OnClick의 setUsername이 값을 초기화 시키니까, 그 영향을 받도록 하기위해.
        setmessage('');
    }
    const onKeyPress = e => {
        console.log(e.key)
        if (e.key === 'enter') {
            onClick();
        }
    }
    const onexit = e => {
        // console.log("Exit :  " + username)
    }

    return (
        <div>
            <h1>  이벤트 연습</h1>
            <input type= "text"
            name= "username" // e.target.name이 없다면 굳이 넣을이유가 없긴함
            placeholder = "사용자명"
            value={username} // 왜 벨류에 유저네임을 넣냐면, OnClick의 setUsername이 값을 초기화 시키니까, 그 영향을 받도록 하기위해.
            onChange = {onChangeusername}
            onBlur= {onexit}
            />

            <input type= "text"
            name= "message"
            placeholder = "암거나"
            value={message}
            onChange = {onChangeMessage}
            onKeyPress= {onKeyPress}
            />

        <button onClick = { onClick }> 확인 </button>
        </div>
    )

}
export default EventPractice