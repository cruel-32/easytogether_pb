import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class LoginApps extends Component {

    _handleChange = (e) =>{
        console.log('e : ', e);
    }

    render() {
        return (
            <form noValidate autoComplete="off">
                <TextField
                    id="standard-id"
                    label="ID"
                    className="login-text-input"
                    onChange={this._handleChange('name')}
                    margin="normal"
                />
                <TextField
                    id="standard-id"
                    label="PASSWORD"
                    className="login-text-input"
                    onChange={this._handleChange('name')}
                    margin="normal"
                />

                <Button variant="contained" color="primary" className="btn-login">
                    Sing In
                </Button>
            </form>
        )
    }

}

export default LoginApps;