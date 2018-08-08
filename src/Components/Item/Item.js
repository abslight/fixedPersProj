import React, { Component } from 'react';
import './Item.css'
import axios from 'axios';
import { connect } from 'react-redux'
import { updateCart } from './../../ducks/reducer'



class Item extends Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
    }
    //   let { deleteItem } = props;


    add() {
        const { itemid } = this.props.item
        let cartItem = {
            userid: this.props.userid,
            productid: itemid
        }
        if (!this.props.userid) {
            alert('Log in or register to add items to your cart.')
        } else {
            axios.post('/api/cartItem', { cartItem })
                .then(res => {
                    this.props.updateCart(cartItem)
                })
            this.showSnack()
        }
    }
    showSnack() {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 1600);
    }
    render() {
        console.log(this.props.userid)
        const { imageurl, name, price, stock, cat } = this.props.item;
        return (
            <div id='topM'>
                <div className="itemCard">
                    <img id='itemImg' src={imageurl} alt='' />
                    <div className='itemInfo'>
                        <h1> {name} </h1>
                        <h3> {cat} </h3>
                        <div id='border'></div>
                        <h2> ${price} </h2> <h3> In Stock: {stock}</h3>
                    </div>
                    <button onClick={this.add}>Add to Cart</button>
                    <div id="snackbar">ADDED TO CART</div>
                    {/* <button onClick={() => deleteHouse(id)}> Delete </button> */}
                </div>
            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        userid: state.userid,
        productid: state.productid
    }
}

export default connect(mapStateToProps, { updateCart })(Item)