# MoMo publishing
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

### 프론트(&퍼블리싱) 기술 스택 정의
- css -> sass, normalize.css
- css 방법론 -> BEM
- ui 프레임워크 -> material ui (form 요소만 적용)
- publish 빌드툴 -> gulp 4.x
- 프론트 프레임워크 -> cra 3.x, react, redux, redux-saga, redux-thunk (기본 es6~)

### 기획 건의
- 페이지명 정의 (+IA)
- 메인 search bar 레이아웃, 아이콘 교체
- 매인 상세 스크롤 내릴 때 카테고리 visible 여부 (스티키 후 안보아는데 다시 보이게 하려면 어떤 액션을 해야하나)

## 작업방식
- 큰 틀 : 퍼블리싱 -> 리액트 -> 배포
- 보통 퍼블리싱 하듯 똑같이 작업하되 react 컴포넌트 (material-ui)가 필요한 부분에만 넣을것 (넣는 방식 하단 표기)
- 제이쿼리도 임포트해서 써도됨. 다만 테스트용으로만 작성하고 기능을 구현하지는 말것 (어차피 추후 리액트로 짜야되고 괜히 페이지 reload만 느려짐...)
- scss는 컴포넌트별로 쪼개기 쉽게 nested 문법 잘 활용할것
- 퍼블리싱완료 후 파일 build해서 리액트 프로젝트로 옮겨 갈 것임...
- 그밖에 사항은 나중에 정합시다.

### react 컴포넌트 넣는 법은 그냥 똑같음. js 생성하고 아래처럼 하고 나중에 html에서 script 태그로 넣으셈
### react 구문 연습도 easytogether_fe에서 하지 말고 여기서 하셈
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