import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
// import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    // margin: theme.spacing(1),
  },
  label: {
    display: 'inline-block',
    minWidth: '100px',
    lineHeight: '32px'
  }
}));

export default function MyProfile(params) {
  const classes = useStyles();
  const editMyInfo = () => {
    alert('Edit my infomation!!')
  };

  return (
    <div className="box-inner">
        <h1 className="blind">프로필</h1>
        <div className={classes.container}>
            <InputLabel className={classes.label} htmlFor="joinName">별명</InputLabel>
            <Input
            defaultValue= {params.name}
            className   = "name"
            inputProps  = {{
                name: 'joinName',
                id: 'joinName',
            }}
            disabled />
        </div>

        <div className={classes.container}>
            <InputLabel className={classes.label} htmlFor="id">가입아이디</InputLabel>
            <Input
            defaultValue= {params.joinInfo.id}
            className   = "id"
            inputProps  = {{
                name: 'id',
                id: 'id',
            }}
            disabled />
        </div>
        
        <div className={classes.container}>
            <InputLabel className={classes.label} htmlFor="joinDate">가입일</InputLabel>
            <Input
            defaultValue= {params.joinInfo.date}
            className   = {classes.input}
            inputProps  = {{
                name: 'joinDate',
                id: 'joinDate',
            }}
            disabled
            />
        </div>

        <p><a href="#infoEdit" onClick={() => editMyInfo()} className="edit"><span>프로필 보기 및 수정</span></a></p>
    </div>
  );
}

export const MyPage = (params) => MyProfile(params);
console.log('my page load');
