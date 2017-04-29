import React from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import logoutRequest from '../store/actions/logoutAct'
import {connect} from 'react-redux'

const styless = {
  customWidth: {
    width: 150,
    backgroundColor: 'purple700',
  },
};
class Main extends React.Component{
    constructor(){
        super()
        this.state = {
      open: true
    }
    }
 handleToggle = () => this.setState({ open: !this.state.open });
handleLogout = ()=>{
    this.props.logoutReq()
}
    render(){
        return(
            <div>

 <AppBar
    title="MAIN"
    style = {{textAlign:'center'}}
      onTouchTap={this.handleToggle}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  >
 <FlatButton label="logout" 
    style = {{color:'white',margin:'20'}}
    onClick = {this.handleLogout.bind(this)}
    
    />
    </AppBar>
  <Drawer width={300} openSecondary={false} open={this.state.open} docked={true} >

          <AppBar title="Go To"
            style={{ height:'78', textAlign: 'center', marginTop:'-2' }}
          />

          <img src='https://cdn0.vox-cdn.com/thumbor/gKdZRVCEdss5Xx_1liF5jbHaQcE=/0x0:640x480/1200x800/filters:focal(0x0:640x480)/cdn0.vox-cdn.com/uploads/chorus_image/image/49517711/auction.0.png' height='220' width='290' alt="invent" />
          <br />
          <br /> <br />

          <Link to='/auctioner'> <RaisedButton
            fullWidth
           
            onTouchTap={this.handleToggle}

            label="goto Auctioner"
            primary={false}

          /></ Link><br /><br /><br />
          <Link to="/Bider"> <RaisedButton
            fullWidth
            style={styless}
            onTouchTap={this.handleToggle}

            label=" goto Bidder"
            primary={false}
          /></ Link><br /><br /><br />
        </Drawer>
        <div>
          {this.props.children}
        </div>
      </div>

        )
    }
}

//export default Main 


        function mapStataToProps(state){
    return{
        app : state.LogoutReducer
    }
}


function mapDispatchToProps(dispatch){
    return{

        logoutReq : ()=>dispatch(logoutRequest())
    }
}


const MainCon =connect(mapStataToProps,mapDispatchToProps)(Main);
export default MainCon; 