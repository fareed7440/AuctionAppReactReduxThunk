import React from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
const styless = {
  customWidth: {
    width: 150,
    backgroundColor: 'purple700',
  },}

  class Bider extends React.Component{
constructor(props){
    super(props)
this.state = {
      open: false
    }
}
 handleToggle = () => this.setState({ open: !this.state.open });

 render(){
        return(
            <div>

 <AppBar
    title="Bider Management Application Site"
    style = {{textAlign:'center'}}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
     onTouchTap={this.handleToggle}
  >

 <Link to='/main'> <RaisedButton
          style = {{margin:'20',backgroundColor:'transparent',color:'white'}}
            label="main"
            primary={true}

          /></ Link>


   </AppBar>

        <Drawer width={300} openSecondary={false} open={this.state.open} docked={true} >

          <AppBar title="Bider"
            style={{ height:'66', textAlign: 'center', marginTop:'-2' }}
          />

          <img src= 'http://houstonauctioncompany.com/wp-content/uploads/2015/02/th-80.jpeg'height='220' width='290' alt="invent" />
          <br />
          <br /> <br />

          <Link to='/addProductCon'> <RaisedButton
            fullWidth
           
            onTouchTap={this.handleToggle}

            label="View Product"
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



export default Bider;