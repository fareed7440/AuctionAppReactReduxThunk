import React from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux'
import logoutRequest from '../store/actions/logoutAct'
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
const styless = {
  customWidth: {
    width: 150,
    backgroundColor: 'purple700',
  },
};
const style = {
  margin: 15,
  backgroundColor: 'transparent',
};
class Home extends React.Component{
constructor(props){
    super(props)
this.state = {
      open: false
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
    title="Auction Management Application"
    style = {{textAlign:'center'}}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
     onTouchTap={this.handleToggle}
  >

    <FlatButton label="logout" 
    style = {{color:'white',margin:'20'}}
    onClick = {this.handleLogout.bind(this)}
    
    />

  </AppBar>

        <Drawer width={300} openSecondary={false} open={this.state.open} docked={true} >

          <AppBar title="Auction"
            style={{ height:'78', textAlign: 'center', marginTop:'-2' }}
          />

          <img src='https://cdn0.vox-cdn.com/thumbor/gKdZRVCEdss5Xx_1liF5jbHaQcE=/0x0:640x480/1200x800/filters:focal(0x0:640x480)/cdn0.vox-cdn.com/uploads/chorus_image/image/49517711/auction.0.png' height='220' width='290' alt="invent" />
          <br />
          <br /> <br />

          <Link to='/addProductCon'> <RaisedButton
            fullWidth
           
            onTouchTap={this.handleToggle}

            label="Add Product"
            primary={false}

          /></ Link><br /><br /><br />
          <Link to="/saleCon"> <RaisedButton
            fullWidth
            style={styless}
            onTouchTap={this.handleToggle}

            label="Add sale "
            primary={false}
          /></ Link><br /><br /><br />

          <Link to="/purchaseCon"> <RaisedButton
            fullWidth
            style={styless}
            onTouchTap={this.handleToggle}

            label="Add purchase "
            primary={false}
          /></ Link><br /><br /><br />

          <Link to="/viewpurchaseCon"> <RaisedButton
            fullWidth
            style={styless}
            onTouchTap={this.handleToggle}
            label="view Purchase "
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


const HomeCon =connect(mapStataToProps,mapDispatchToProps)(Home);
export default HomeCon; 