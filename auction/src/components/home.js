import React from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class Home extends React.Component{
constructor(props){
    super(props)

}

handleLogout = ()=>{
    this.props.LogoutRequest ()
}

    render(){
        return(
            <div>

 <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  >

    <FlatButton label="Default" 
    onClick = {this.handleLogout.bind(this)}
    
    />

  </AppBar>






            </div>
        )
    }
}


export default Home;