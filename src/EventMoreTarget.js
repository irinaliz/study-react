import React , {useState} from "react";

const EventMoreTarget = () => {
    const [form , setForm] = useState({
        username: '',
        message: ''
        }
    );
    const {username , message } = form; // form의 username, message배열을 이 변수에 삽입
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        }
        setForm(nextForm)
    }

    const onClick = () => {
        alert(username + " : " + message);
        setForm ({
            username : '',
            message : ''
        })
    }
    const onKeyPress = (e) => {
        if (e.key === 'Enter ') {
            onClick()
        }
    }

    return (
        <div>
            <h1>  이벤트 연습</h1>
            <input type= "text"
            name= "username" // e.target.name이 없다면 굳이 넣을이유가 없긴함
            placeholder = "사용자명"
            value={username} // 왜 벨류에 유저네임을 넣냐면, OnClick의 setUsername이 값을 초기화 시키니까, 그 영향을 받도록 하기위해.
            onChange = {onChange}
            // onBlur= {onexit}
            />

            <input type= "text"
            name= "message"
            placeholder = "암거나"
            value={message}
            onChange = {onChange}
            onKeyPress= {onKeyPress}
            />

        <button onClick = { onClick }> 확인 </button>
        </div>
    )

}
export default EventMoreTarget