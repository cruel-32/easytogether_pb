console.log('이 폴더는 리액트 생성용');
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';

import {ImportTestComponent} from './importTest.js';
import MovieApps from './movieApps/MovieApps';
import LoginApps from './login/LoginApps';


const Name = '승승';
const Greeting = '안녕하세요~ 여기서 테스트용 리액트 컴포넌트를 넣으시오';

const handleChange = (e) =>{
    console.log('e.target : ', e.target);
}

const TestComponent = ({greeting,name}) => <h1>{name}님 {greeting}</h1>

const $root = $('#root');
const $movie = $('#movie');
const $login = $('#login-form');
if($root.length){
    ReactDOM.render(
        <TextField
            id="standard-name"
            label="ID"
            className="wrap"
            defaultValue=""
            onChange={handleChange}
        />
    , $root[0]);
}

const $test = $('#test');
if($test.length){
    ReactDOM.render(
        <TestComponent name={Name}  greeting={Greeting}></TestComponent>
        , $test[0]);
}

const $importTest = $('#importTest');
if($importTest.length){
    ReactDOM.render(
        <ImportTestComponent name={Name}  greeting={Greeting}></ImportTestComponent>
        , $importTest[0]);
}

if($movie.length){
    ReactDOM.render(<MovieApps />, document.getElementById("movie"));
}

if($login.length){
    ReactDOM.render(<LoginApps />, document.getElementById("login-form"));
}