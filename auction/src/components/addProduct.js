import React from 'react'
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';
import './style.css';

const style1 = {
    height: 500,
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


class AddProduct extends React.Component{
constructor(props){
    super(props)
    this.state = {
        name:'',
        company:'',
        quantity:'',
         avatar: '',
        isUploading: false,
         progress: 0,
         avatarURL:'',
    
    }
    this.handleFormInput = this.handleFormInput.bind(this)
        this.handleInput= this. handleInput.bind(this)
}


  handleChangeUsername = (event) => this.setState({username: event.target.value});
  handleUploadStart = () => this.setState({isUploading: true, progress: 0});
  handleProgress = (progress) => this.setState({progress});
  handleUploadError = (error) => {
      this.setState({isUploading: false});
  }
  handleUploadSuccess = (filename) => {
      this.setState({avatar: filename, progress: 100, isUploading: false});
      firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
  };


 handleFormInput = (e) => {
        e.preventDefault();
        let name = this.refs.name.getValue();
        let company = this.refs.company.getValue();
        let quantity= this.refs.quantity.getValue();
        let obj = {
            name: name,
            company: company,
            quantity: quantity,
             pic : this.state.avatarURL
        }
        console.log('ggg', obj)
        this.props.AddProduct(obj);
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

render(){
    return(
        <div>

  <center>
                    <Paper style={style1} zDepth={4} rounded={false} >
                        <form onSubmit={this.handleFormInput}>


                            <TextField
                                name='name'
                                ref='name'
                                type='text'
                                onChange={this.handleInput}
                                hintText="Enter Product Name"
                                underlineStyle={styles.underlineStyle}
                            /><br /><br /><br />
                            <TextField
                                name='company'
                                ref='company'
                                type='text'
                                onChange={this.handleInput}
                                hintText="Enter Company Name"
                                underlineStyle={styles.underlineStyle}
                            /><br /><br /><br />
                            <TextField
                                name="quantity"
                                ref='quantity'
                                type='number'
                                onChange={this.handleInput}
                                hintText="Enter Quantity"
                                underlineStyle={styles.underlineStyle}
                            /><br /><br /><br />

 

          
          {this.state.avatarURL &&
            <img  className = 'img1' src={this.state.avatarURL} />
          }
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref('images')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
 <br /><br /><br /> 






                            <RaisedButton label="Submit" type='submit' style={style} /><br/><br/>
                    </form>
                    </Paper>



                </center>



        </div>
    )
}
}


export default AddProduct;