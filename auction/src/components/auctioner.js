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
class Auctioner extends React.Component{
constructor(props){
    super(props)
this.state = {
      open: false
    }
}
 handleToggle = () => this.setState({ open: !this.state.open });
// handleLogout = ()=>{
//     this.props.logoutReq()
// }

    render(){
        return(
            <div>

 <AppBar
    title="Auctionar Management Application Site"
    style = {{textAlign:'center'}}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
     onTouchTap={this.handleToggle}
  >

    {/*<FlatButton label="logout" 
    style = {{color:'white',margin:'20'}}
    onClick = {this.handleLogout.bind(this)}
    
    />*/}
       <Link to='/main'> <RaisedButton
          style = {{margin:'20',backgroundColor:'transparent',color:'white'}}
            label="main"
            primary={true}

          /></ Link>

  </AppBar>

        <Drawer width={300} openSecondary={false} open={this.state.open} docked={true} >

          <AppBar title="Auctionar"
            style={{ height:'78', textAlign: 'center', marginTop:'-2' }}
          />

          <img src='http://spirepaymentsolutions.com/auction-fundraiser-payment-system/wp-content/uploads/2012/03/Auctionlogo_regd_Spire_2011_338x168px-300x149.jpg' height='220' width='300' alt="invent" />
          <br />
          <br /> <br />

          <Link to='/addProductCon'> <RaisedButton
            fullWidth
           
            onTouchTap={this.handleToggle}

            label="Add Product"
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

export default  Auctioner

