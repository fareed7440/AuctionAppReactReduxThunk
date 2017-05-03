import React from 'react'
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { Link } from 'react-router'
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
const style = {
    height: 80,
    width: 300,
    margin: 20,
    backgroundColor: '#7B1FA2',
    color: 'white',
    textAlign: 'center',
    display: 'inline-block',
};
class ViewBidProduct extends React.Component {
    constructor(props) {
        super(props);
this.conditioForAssign = this.conditioForAssign.bind(this)
      

    }
    componentDidMount() {
        this.props.ViewBidProductRequest()
        console.log("fareed ", this.props);
       this.props.AssignToHiegherBider()
  
       
    }

    
    conditioForAssign(val){
        console.log(val.amount,"vall amounttttt")
 const assignData = this.props && this.props.app && this.props.app.productAsign? this.props.app.productAsign : {}
console.log('399999999999999999999999999',assignData[0].amount)
         if(val.amount == assignData[0].amount ){
            return  assignData[0].email
        }
        else{
            return 'Not Assign'
        }
    }

    render() {
        const arr = [];
        const BiddingData = this.props && this.props.app && this.props.app.viewBidProduct? this.props.app.viewBidProduct : [];
        const assignData = this.props && this.props.app && this.props.app.productAsign? this.props.app.productAsign :[];
        
        console.log('bidddddddd',BiddingData)
          console.log('assssssssssss',assignData)

        return (
            <div>
                <center>
                </center>
                <Table adjustForCheckbox={false} displayRowCheckbox={false}>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
                        <TableRow >

                            <TableHeaderColumn style={{ color: "#7B1FA2" }}>Product Name</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }}>Customer Email</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }}>Customer Price</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }}>Assign To..</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }} >Least Price</TableHeaderColumn>
                              <TableHeaderColumn style={{ color: "#7B1FA2" }} >product Pic</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }}>start Date</TableHeaderColumn>
                             <TableHeaderColumn style={{ color: "#7B1FA2" }}>End Date</TableHeaderColumn>
                
                        </TableRow>
                    </TableHeader>

                    <TableBody displayRowCheckbox={false}>
                        {BiddingData.map((val, i) => {
                            console.log("keyyyyyyyyyyyyyyyyyyyyyyyyyy",val.key)
                            return (
                                <TableRow key={i} >
                                    <TableRowColumn key={i}>{val.name}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.email}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.amount}</TableRowColumn>
                                     <TableRowColumn >{this.conditioForAssign(val) }</TableRowColumn>
                                    <TableRowColumn key={i}>{val.price}</TableRowColumn>
                                    <ListItem
                                        disabled={true}
                                        leftAvatar={
                                            <Avatar

                                                src={val.pic}
                                                icon={<FontIcon className="muidocs-icon-communication-voicemail"
                                                // src={val.pic}

                                                />} />
                                        }
                                    >

                                    </ListItem>
                                    <TableRowColumn key={i}>{val.sdate}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.edate}</TableRowColumn>
                                    
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>



            </div>
        )
    }

}


export default  ViewBidProduct;