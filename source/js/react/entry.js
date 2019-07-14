import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

/* <!--bundle test */
import TextField from '@material-ui/core/TextField';
import {ImportTestComponent} from './importTest.js';

const Name = '승승';
const Greeting = '안녕하세요~ 여기서 테스트용 리액트 컴포넌트를 넣으시오';

const handleChange = (e) =>{
    console.log('e.target : ', e.target);
}

const $root = $('#root');
if($root.length){
    ReactDOM.render(
        <TextField
            id="standard-name"
            label="Name"
            className="wrap"
            defaultValue=""
            onChange={handleChange}
        />
    , $root[0]);
}

const $importTest = $('#importTest');
if($importTest.length){
    ReactDOM.render(
        <ImportTestComponent name={Name}  greeting={Greeting}></ImportTestComponent>
        , $importTest[0]);
}
/* bundle test--> */


const $wrap = $('.wrap');
if($wrap.length){
    ReactDOM.render(
        <React.Fragment>
            테스트컴포넌트!!!!!!
            <CssBaseline/>
        </React.Fragment>
        , $wrap[0]);
}
<<<<<<< HEAD

// MyPage
import {MyPage} from './mypage.js';
const JoinInfo = {
    'id' : '승승승승',
    'date' : '2019년 01월 01일',
}

const $myInfo = $('.myInfo');
if($myInfo.length){
    console.log('MyPage')
    ReactDOM.render(
        <MyPage name={Name} joinInfo = {JoinInfo}></MyPage>
        , $myInfo[0]);
}
=======
//mypage
import Mypage from './Mypage';
const $mypage = $('#mypage');
ReactDOM.render(<Mypage />, $mypage[0]);
>>>>>>> 191c9db... commit

