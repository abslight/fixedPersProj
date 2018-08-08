import React, { Component } from 'react'
import CartItems from './../cartItems/CartItems'
import axios from 'axios'
import './Cart.css'
import { connect } from 'react-redux'
import { updateCart } from './../../ducks/reducer'
import Swoosh from './1200px-Logo_NIKE.svg.png'
import StripeCheckout from 'react-stripe-checkout'
import { increaseQuantity, decreaseQuantity } from '../../ducks/reducer'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            total: 0,
            id: ''
            // quantity: 1
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.get = this.get.bind(this)
        this.calcTotal = this.calcTotal.bind(this)
        this.incQuant = this.incQuant.bind(this)
        this.decQuant = this.decQuant.bind(this)
    }
    get() {
        axios.get('/api/cart').then(res => {
            this.setState({
                cart: res.data
                // quantity: this.props.item.quantity
            })
            this.calcTotal()
        })
    }
    componentDidMount() {
        // this.setState({
        //     id: this.props.userid
        // })
        this.get()
    }

    deleteItem(id) {
        // console.log(cartItem)
        // const { id } = e.target
        // const { userid } = this.props.userid
        // this.props.productid = this.state.cart[e].itemid
        // console.log(this.props.userid, this.props.productid);
        console.log(id)
        axios.delete(`/api/cartItem/${id}`).then(res => {
            res.data;
            this.get()
        })
        // res.data
    }

    calcTotal() {
        //console.log(this.state.total)
        let cartTotal = 0
        for (let i = 0; i < this.state.cart.length; i++) {
            cartTotal += (+this.state.cart[i].price * this.state.cart[i].quantity)
        } this.setState({
            total: cartTotal
        })
        //console.log(cartTotal)
    }
    incQuant(quantity, productid) {
        console.log(quantity, productid)
        axios.put(`/api/cart/`, { quantity: ++quantity, productid })
            .then(res => {
                console.log(res.data[0])
                // this.props.increaseQuantity(res.data[0])
            }
            )
        this.componentDidMount()
        this.calcTotal()
    }

    decQuant(quantity, productid) {
        axios.put(`/api/cart/`, { quantity: --quantity, productid })
            .then(res => {
                console.log(res.data[0])
                // this.props.decreaseQuantity(res.data[0].quantity)
            }
            )
        this.get()
        this.calcTotal()
    }
    onToken = (token) => {
        token.card = void 0;
        axios.post(`/charge`, { token, amount: this.state.total })
            .then(res => {
                this.setState({
                    total: 0,
                    cart: []

                })
            });
        this.get()
    }
    render() {
        let inventory = this.state.cart.map(element => {
            return (
                <div >
                    <CartItems
                        // id={element.itemid}
                        item={element}
                        id={element.id}
                        deleteItem={this.deleteItem}
                        inc={this.incQuant}
                        dec={this.decQuant}
                        total={this.calcTotal}
                    />
                </div>
            )
        }

        )
        return (
            <div>
                <div id='checkout'>

                    <div id='coInfo'>
                        <div id='coSwoosh'>
                            <img src={Swoosh} alt="Nike Swoosh" />
                        </div>
                        <h3>Total: ${this.state.total}</h3>
                        {/* <button onClick={ */}
                        <div id='stripe'>
                            <StripeCheckout
                                token={this.onToken}
                                stripeKey={'pk_test_7q32FE1o8H3zgP0OFIUjMpX4'}
                                amount={this.state.total * 100}
                            />
                        </div>
                        {/* // />}>CHECKOUT</button> */}
                    </div>
                </div>
                <div>
                    {inventory}
                </div >
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userid: state.userid,
        productid: state.productid,
        quantity: state.quantity
    }
}

export default connect(mapStateToProps, { updateCart, increaseQuantity, decreaseQuantity })(Cart)