import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


const MypageForm = ({temp, onChange, onCreate, onKeyPress, onCancle}) => {
  	return (
    <article className="form layout">
    	<div className="head">
			<h1>PROFILE<em>settings</em></h1>
			<Button className="btn close" onClick={onCancle}> <Icon className="icon">close</Icon> </Button>
		</div>
    	<div className="box">
    		<span className="thumbnail"><img src={temp.thumbnail} alt="프로필 이미지" /></span>
    		<Button
			  variant="contained"
			  component="label"
			  className="btn upload"
			  onChange={onChange("thumbnail")}
			>
			  <Icon className="icon">cloud_upload</Icon>
			  <input
			    type="file"
			    style={{ display: "none" }}
			  />
			</Button>
		</div>
    	<div className="box">
    		<TextField
				label="이름"
				className="username"
				value={temp.username}
			    onChange={onChange("username")}
			/>
			<TextField
				select
				label="성별"
				className="sex"
				value={temp.sexRange}
				onChange={onChange("sex")}
				InputProps={{
					startAdornment: <InputAdornment position="start">{temp.sex}</InputAdornment>,
				}}
			>
				{temp.sexRange.map(option => (
				<MenuItem key={option.value} value={option.label}>
					{option.label}
				</MenuItem>
				))}
			</TextField>
			<TextField
				label="생일"
				type="date"
				className="birth"
				value={temp.birth}
				onChange={onChange("birth")} 
			/>
			<TextField					
				label="지역"
				className="location"
				value={temp.location}
				onChange={onChange("location")} 
			    onKeyPress={onKeyPress}
			/>
			<TextField					
				label="관심사"
				className="location"
				value=""
			/>
		</div>
		<div className="foot">
			<Button className="btn primary" onClick={onCreate}> 확인 </Button>
		</div>
    </article>
  );
};

export default MypageForm;