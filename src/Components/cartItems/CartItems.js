import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { updateCart } from './../../ducks/reducer'
import './cartItems.css'
// import { get } from './../Cart/Cart'


class CartItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
        this.localIncrease = this.localIncrease.bind(this)
        this.localDecrease = this.localDecrease.bind(this)
    }
    componentDidMount() {
        this.setState({ quantity: this.props.item.quantity })
    }
    localIncrease() {
        this.props.inc(this.state.quantity, this.props.item.itemid)
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    localDecrease() {
        this.props.dec(this.state.quantity, this.props.item.itemid)
        this.setState({
            quantity: this.state.quantity - 1
        })
    }
    render() {
        const { id, imageurl, name, price, stock, cat, quantity } = this.props.item
        const { deleteItem, dec, inc, total } = this.props;
        return (
            <div id='cartTop' >
                <div className="cartCard">
                    <img id='cartImg' src={imageurl} alt='' />
                    <div className='cartInfo'>
                        <h1> {name} </h1>
                        <h3> {cat} </h3>
                        <div id='Cborder'></div>
                        <h2> ${price} </h2>
                        <div id='quant'>
                            <h3> Quantity: {quantity}</h3>
                            <button id='incQ' onClick={() => this.localIncrease()}>▲</button>
                            <button id='decQ' onClick={() => this.localDecrease()}>▼</button>
                            <button onClick={() => deleteItem(id)}>Delete from cart</button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        userid: state.userid,
        productid: state.productid,
        quantity: state.quantity
    }
}

export default connect(mapStateToProps, { updateCart })(CartItems)