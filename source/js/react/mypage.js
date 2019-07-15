import $ from 'jquery';
import React, { Component } from 'react';
import MypageTemplate from './mypage/MypageTemplate';
import MypageForm from './mypage/MypageForm';
import MypageInfo from './mypage/MypageInfo';
import MypageList from './mypage/MypageList';
import MypageLink from './mypage/MypageLink';
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
                sexRange : [
                    {value: 0,label:'남'},
                    {value: 1,label:'여'},
                ],
                birth: '2000-11-11',
                message: '',
                location: ['서울특별시 성북구 정릉동','서울특별시 강서구 마곡동'],
                owns: [],
                togethers: [],
                events: [],
            },
            temp : {}
        }
        Object.assign(this.state.temp, this.state.myInfo);

        this.handleToggle = () => {
            console.log('handleToggle')
            $('.form').toggle();
        }
        this.handleChange = name => e => {
            const { temp } = this.state;
            const str = e.target.value.split('\\');
            const value = name == "thumbnail" ? this.imagepath + str[str.length-1]: e.target.value
            this.setState({
                temp : Object.assign(temp, {
                    [name]: value,
                })
            });
            
            console.log('handleChange', temp, e.target)
        }
        this.handleCreate = () => {
            const { myInfo, temp } = this.state;
            this.handleToggle();
            this.setState({
                myInfo : Object.assign(myInfo, temp)
            });         
            console.log('handleCreate', myInfo)
        }
        this.handleCancel = () => {
            const { temp, myInfo } = this.state;
            this.setState({
                temp : Object.assign(temp, myInfo)
            });
            this.handleToggle();
            console.log('handleCancel')
        }
        this.handleKeyPress = (e) => {
            // 눌려진 키가 Enter 면 handleCreate 호출
            if(e.key === 'Enter') {
              this.handleCreate();
            }
        }

    }
    render() {
    const { myInfo, temp } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleCancel,
 //      handleRemove
    } = this;
    return (
      <MypageTemplate form={<MypageForm 
        myInfo= {myInfo}
        temp= {temp}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
        onToggle={handleToggle}
        onCancel={handleCancel}
        />}>
        <MypageInfo myInfo={myInfo} onToggle={handleToggle} />
        <MypageList myInfo={myInfo} onToggle={handleToggle} />
        <MypageLink myInfo={myInfo} onToggle={handleToggle} />
      </MypageTemplate>
    );
    }
}

export default Mypage;

