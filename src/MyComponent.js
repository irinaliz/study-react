import React from "react";
import propTypes from "prop-types"

const MyComponent = ({name,children , favoriteNumber}) => {
    //여기서 pros는 모든 변수를 받는 Array같은 변수
    return <div> hello! 나의 컴포넌트 ! {name} <br/>
    children 값 {children}이다. <br/>
    제가 좋아하는 값은 {favoriteNumber} 입니다.
    </div>
    
}

MyComponent.defaultProps = {
    name : "기본 이름"
}

MyComponent.propTypes = {
    name : propTypes.string.isRequired,
    favoriteNumber: propTypes.number.isRequired
}

export default MyComponent;