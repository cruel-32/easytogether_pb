import React, {Component} from 'react';
// import Upload from 'material-ui-upload/Upload';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

// import './Form.css';

const MypageForm = ({value, myInfo, onChange, onCreate, onKeyPress}) => {
  return (
    <article className="info-form">
    	<h1>프로필 수정</h1>
    	<div className="box">
			<span className="thumbnail"><img src={myInfo.thumbnail} alt="프로필 이미지"/></span>
    	</div>
    	<div className="box">
    		<h2>수정 정보</h2>
    		<TextField
				label="닉네임"
				className="username"
				value={myInfo.username}
				onChange={onChange} 
			    onKeyPress=	{onKeyPress}
			/>
			<TextField					
				label="지역"
				className="location"
				value={myInfo.location}
				onChange={onChange} 
			    onKeyPress={onKeyPress}
			/>
    	</div>
    	<div className="box">
    		<h2>개인 정보</h2>
    		<TextField
				label="이름"
				className="name"
				value={myInfo.name}
				disabled
			/>
			<TextField
				label="이메일"
				className="email"
				value={myInfo.email}
				disabled
			/>
			<TextField
				label="성별"
				className="sex"
				value={myInfo.sex}
				onChange={onChange} 
			    onKeyPress={onKeyPress}
			    disabled
			/>
			<TextField
				label="생일"
				className="birth"
				value={myInfo.birth}
				onChange={onChange} 
			    onKeyPress={onKeyPress}
			    disabled
			/>
		</div>
		<div className="box">
			<Button color="primary" className="edit" onClick={onCreate}>
			확인
			</Button>
		</div>
    </article>
  );
};

export default MypageForm;