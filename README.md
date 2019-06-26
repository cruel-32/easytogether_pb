# easy together publishing
## 프로젝트 시작 전 gulp 설치 :
###
```
    npm i -g gulp-cli 
```
## 프로젝트 시작 전 의존성 설치 :
###
```
    npm i
```
## 개발모드로 시작하기 :
###
```
    gulp
```

## 작업방식
- 보통 퍼블리싱 하듯 똑같이 작업하되 react 컴포넌트 (material-ui) 사용가능
- 제이쿼리도 임포트해서 써도됨. 다만 테스트용으로만 작성하고 기능을 구현하지는 말것 (어차피 추후 리액트로 짜야되고 괜히 페이지 reload만 느려짐...)
- 퍼블리싱완료 후 파일 build해서 리액트 프로젝트로 옮겨 갈 것임...
- scss는 컴포넌트별로 쪼개기 쉽게 nested 문법 잘 활용할것
- 그밖에 사항은 나중에 정합시다.
```js
    //**.js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import TextField from '@material-ui/core/TextField';

    const handleChange = (e) =>{
        console.log('e.target : ', e.target);
    }

    ReactDOM.render(
        <TextField
            id="standard-name"
            label="Name"
            className="wrap"
            defaultValue=""
            onChange={handleChange}
        />
    , document.querySelector('#root'));
```