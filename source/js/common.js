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
