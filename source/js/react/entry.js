console.log('이 폴더는 리액트 생성용');
import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';

const Name = '승승';
const Greeting = '안녕하세요~ 여기서 테스트용 리액트 컴포넌트를 넣으시오';

const handleChange = (e) =>{
    console.log('e.target : ', e.target);
}

const TestComponent = ({greeting,name}) => <h1>{name}님 {greeting}</h1>

ReactDOM.render(
    <TextField
        id="standard-name"
        label="Name"
        className="wrap"
        defaultValue=""
        onChange={handleChange}
    />
, document.querySelector('#root'));

ReactDOM.render(
    <TestComponent name={Name}  greeting={Greeting}></TestComponent>
, document.querySelector('#test'));