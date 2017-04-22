import React from 'react'
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Link} from 'react-router'
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

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
        }

        this.handleFormInput = this.handleFormInput.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }
    handleFormInput = (e) => {
        e.preventDefault();
        let name = this.refs.name.getValue();
        let email = this.refs.email.getValue();
        let password = this.refs.password.getValue();
        let obj = {
            name: name,
            email: email,
            password: password
        }
        console.log('ggg', obj)
        this.props.SignupReq(obj);
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
    title={<span style={styles2.title}>Sign Up</span>}
  
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
 
  />
                <center>
                    <Paper style={style1} zDepth={4} rounded={false} >
                        <form onSubmit={this.handleFormInput}>


                            <TextField
                                name='name'
                                ref='name'
                                type='text'
                                onChange={this.handleInput}
                                hintText="Enter Name"
                                underlineStyle={styles.underlineStyle}
                            /><br /><br /><br />
                            <TextField
                                name='email'
                                ref='email'
                                type='email'
                                onChange={this.handleInput}
                                hintText="Enter Email"
                                underlineStyle={styles.underlineStyle}
                            /><br /><br /><br />
                            <TextField
                                name='password'
                                ref='password'
                                type='password'
                                onChange={this.handleInput}
                                hintText="Enter Password"
                                underlineStyle={styles.underlineStyle}
                            /><br /><br /><br />
                            <RaisedButton label="Signup" type='submit' style={style} /><br/><br/>
                            <Link to='/loginCon'>if already  have Account Click here </Link>
                        </form>
                    </Paper>



                </center>
            </div>
        )
    }



}



export default Signup;