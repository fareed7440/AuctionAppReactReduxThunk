import React from 'react'
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Snackbar from 'material-ui/Snackbar'

const styles2 = {
    title: {
        cursor: 'pointer',
    },
};

const style1 = {
    height: 400,
    width: 400,
    margin: 120,
    textAlign: 'center',
    display: 'inline-block',
};
const style = {
    margin: 12,
};
const styles = {
    errorStyle: {
        color: orange500,
    },
    underlineStyle: {
        borderColor: orange500,
    },
    floatingLabelStyle: {
        color: orange500,
    },
    floatingLabelFocusStyle: {
        color: blue500,
    },
};

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            snapbar: false,
        }

        this.handleFormInput = this.handleFormInput.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }
    // componentWillReceiveProps() {
    //     this.setstate({
    //         snapbar: this.props.snake
    //     })

   // }
    handleFormInput = (e) => {
        e.preventDefault();
        let email = this.refs.email.getValue();
        let password = this.refs.password.getValue();
        let obj = {
            email: email,
            password: password
        }
        console.log('ggg', obj)
        this.props.LoginReq(obj);
        // this.setState({snapbar : true})
    }

    handleInput = (evt) => {

        const target = evt.target;
        //const value  = target.value;
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name;
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div>

                <AppBar
                    title={<span style={styles2.title}>Login</span>}

                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}

                />
                <center>
                    <Paper style={style1} zDepth={4} rounded={false} >
                        <form onSubmit={this.handleFormInput}>
                            <br /><br />

                            <TextField
                                name='email'
                                ref='email'
                                type='email'
                                onChange={this.handleInput}
                                hintText="Enter Email"
                                underlineStyle={styles.underlineStyle}
                            /><br /><br /><br /><br /><br />
                            <TextField
                                name='password'
                                ref='password'
                                type='password'
                                onChange={this.handleInput}
                                hintText="Enter Password"
                                underlineStyle={styles.underlineStyle}
                            /><br /><br /><br /><br /><br />

                            <RaisedButton label="Login" type='submit' style={style} />
                        </form>
                    </Paper>


                    <Snackbar
                        open={this.state.snapbar}
                        message="Successfully Added"
                        autoHideDuration={8000}
                        
                    />
                </center>
            </div>
        )
    }



}



export default Login;