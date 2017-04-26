import React, { Component } from 'react';
import * as mat from 'material-ui';
import Person from 'material-ui/svg-icons/social/person';


import './style.css'

class BitProduct extends Component {
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this)
   
    }

    componentDidMount() {
      //  this.props.userRequest()
    //    this.props.loadProductDetail()
        this.props.ViewBitRequest(this.props.params.id)
        console.log("recieve.................",this.props.params.id)
    }

    handleSubmit(ev) {
        ev.preventDefault();
        let obj = {
            name: this.props.bit.viewbit[1],
            email: this.props.bit.viewbit[0],
            amount: this.refs.bit.getValue(),
            pic : this.props.bit.viewbit[0]

        }
           console.log("Submitted Data", obj)
           this.props.bitProducts(obj);
        
    }
    render() {
        const style = {
            paper: {
                display: 'inline-block',
                float: 'left',
                marginLeft: '500px',
                marginTop: '20px',

            },
            rightIcon: {
                textAlign: 'center',
                lineHeight: '40px',
            },
        };

       const viewbit = this.props && this.props.bit && this.props.bit.bidding? this.props.bit.bidding: [];
    console.log('view Bitt',viewbit)
        return (

            <div className="carddiv">             
                <form onSubmit={this.handleSubmit}>
                    <mat.Paper style={style.paper}>

                        <mat.CardHeader
                          //  title={"Hello" + " " + users[1]}
                          //  subtitle={users[0]}
                            avatar={<mat.Avatar icon={<Person />} />}
                        />
                        <mat.Menu desktop={false} >
                            <mat.MenuItem primaryText="Product Name:" secondaryText={viewbit[0]} />
                             <mat.MenuItem primaryText="company:" secondaryText={viewbit[1]} />
                            <mat.MenuItem primaryText="StartTime:" secondaryText={viewbit[6]} />
                            <mat.MenuItem primaryText="End Time:" secondaryText={viewbit[2]} />
                              <mat.MenuItem primaryText="Min price:" secondaryText={viewbit[4]} />
                            <mat.MenuItem primaryText="Product Pic" secondaryText={<mat.Avatar size={80} src={viewbit[3]}></mat.Avatar>} />
                            <mat.TextField
                                hintText="Enter Product Bit Amount"
                                floatingLabelText="Enter Product Bit Amount"
                                className="amount"
                                ref="amount"
                                name="amount"
                                required={true}
                                type="text"

                            /><br /><br />
                            <mat.RaisedButton className="btn" type="submit" label="Submit" primary={true} />
                        </mat.Menu>
                    </mat.Paper>
                </form>
            
            </div>
        )
    }
}

export default BitProduct;