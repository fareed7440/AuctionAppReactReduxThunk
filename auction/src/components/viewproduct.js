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
class ViewProduct extends React.Component {
    constructor(props) {
        super(props);

      

    }
    componentDidMount() {
        this.props.ViewProductRequest()
       // this.props.bittingData()
    }
    handleData = (id) => {
        browserHistory.push("/viewproductCon/" + id)
        console.log("ID", id)
        // this.props.bittingData(id)

    }


    render() {
        const viewproduct = this.props && this.props.app && this.props.app.viewProduct ? this.props.app.viewProduct : [];
        const viewbit = this.props && this.props.app && this.props.app.bidding ? this.props.app.bidding : [];
        console.log('wievvvvvvvv', viewproduct);
        console.log('bit viewproduct', viewbit)

        return (
            <div>
                <center>
                </center>
                <Table adjustForCheckbox={false} displayRowCheckbox={false}>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
                        <TableRow >

                            <TableHeaderColumn style={{ color: "#7B1FA2" }}>Product</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }}>Company</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }}>Pic</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }} >start Date</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }}> End Date</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }}> Price</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }}> Quantity</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }}>start Bit</TableHeaderColumn>

                        </TableRow>
                    </TableHeader>

                    <TableBody displayRowCheckbox={false}>
                        {viewproduct.map((val, i) => {
                            console.log("keyyyyyyyyyyyyyyyyyyyyyyyyyy",val.key)
                            return (
                                <TableRow key={i} style={{ cursor: 'pointer' }} onTouchTap={() => { this.handleData(val.key) }}>
                                    <TableRowColumn key={i}>{val.Products}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.company}</TableRowColumn>
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
                                    <TableRowColumn key={i}>{val.price}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.quantity}</TableRowColumn>
                                    <TableRowColumn><RaisedButton label="Start bit" /></TableRowColumn>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>



            </div>
        )
    }

}


export default ViewProduct;