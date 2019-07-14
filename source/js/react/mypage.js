import $ from 'jquery';
import React, { Component } from 'react';
import MypageTemplate from './mypage/MypageTemplate';
import MypageForm from './mypage/MypageForm';
import MypageInfo from './mypage/MypageInfo';
import Button from '@material-ui/core/Button';

class Mypage extends Component {
    constructor(props){
        super();
        this.id=0;
        this.imagepath = '../../../images/';
        this.state = {
            myInfo : {
                email: '동이@이메일.com',
                name: '홍길동',
                username: '동이',
                thumbnail: this.imagepath+'cat.1.jpg',
                sex: '여',
                birth: '2000년 11년 11일',
                message: '',
                location: ['서울특별시 성북구 정릉동','서울특별시 강서구 마곡동'],
                owns: [],
                togethers: [],
                events: [],
            },
        }
        this.handleToggle = () => {
            console.log('handleToggle')
            $('.info-form').toggle();
        }
        this.handleChange = (e) => {
            const { myInfo } = this.state;
            console.log(e.currentTarget, myInfo)
            this.setState({
                myInfo : Object.assign(myInfo, {
                    username: e.currentTarget.value, // 인풋 비우고
                })
            });
        }
        this.handleCreate = () => {
            const { myInfo } = this.state;
            this.handleToggle();
            this.setState({
                myInfo : Object.assign(myInfo, {
                    username: myInfo.username, // 인풋 비우고
                })
            });         console.log('handleCreate', myInfo)
        }
        this.handleKeyPress = (e) => {
            // 눌려진 키가 Enter 면 handleCreate 호출
            if(e.key === 'Enter') {
              this.handleCreate();
            }
        }

    }
    render() {
    const { name , myInfo } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
 //      handleRemove
    } = this;
    console.log(this)
    return (
      <MypageTemplate form={<MypageForm 
        value={name}
        myInfo= {myInfo}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
        />}>
        <MypageInfo myInfo={myInfo} onToggle={handleToggle} />
        <article className="list">
            <h1>My List</h1>
            <p><span className="label">가입한 모임</span><span>{myInfo.togethers.length}</span></p>
            <p><span className="label">참여한 이벤트</span><span>{myInfo.events.length}</span></p>
        </article>
        <article className="setting">
            <h1>My Link</h1>
            템플릿 완성2
        </article>
      </MypageTemplate>
    );
    }
}

export default Mypage;



// state = {
//      input: '',
//      todos: [
//        { id: 0, text: ' 리액트 소개', checked: false },
//        { id: 1, text: 'JSX 사용해보기', checked: true },
//        { id: 2, text: '라이프 사이클 이해하기', checked: false },
//      ]
//  }
//  handleChange = (e) => {
//      this.setState({
//        input: e.target.value // input 의 다음 바뀔 값
//      });
//  }

//   handleCreate = () => {
//     const { input, todos } = this.state;
//     this.setState({
//       input: '', // 인풋 비우고
//       // concat 을 사용하여 배열에 추가
//       todos: todos.concat({
//         id: this.id++,
//         text: input,
//         checked: false
//       })
//     });
//   }

//   handleKeyPress = (e) => {
//     // 눌려진 키가 Enter 면 handleCreate 호출
//     if(e.key === 'Enter') {
//       this.handleCreate();
//     }
//   }

//   handleToggle = (id) => {
//     const { todos } = this.state;
    
//     // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
//     const index = todos.findIndex(todo => todo.id === id);
//     const selected = todos[index]; // 선택한 객체

//     const nextTodos = [...todos]; // 배열을 복사
    
//     // 기존의 값들을 복사하고, checked 값을 덮어쓰기
//     nextTodos[index] = { 
//       ...selected, 
//       checked: !selected.checked
//     };

//     this.setState({
//       todos: nextTodos
//     });
//   }

//   handleRemove = (id) => {
//     const { todos } = this.state;
//     this.setState({
//       todos: todos.filter(todo => todo.id !== id)
//     });
//   }