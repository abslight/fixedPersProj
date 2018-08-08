import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AllSub extends Component {
    render() {
        return (
            <ul>
                <Link to='/inventory/shoes'>
                    <li>Shoes</li>
                    <hr />
                </Link>
                <Link to='/inventory/tops'>
                    <li>Tops & T-Shirts</li>
                    <hr />
                </Link>
                <Link to='/inventory/pants'>
                    <li>Pants & Shorts</li>
                    <hr />
                </Link>
                <Link to='/inventory/hoodies'>
                    <li>Hoodies & Sweatshirts</li>
                    <hr />
                </Link>
                <Link to='/inventory/cleats'>
                    <li>Cleats</li>
                    <hr />
                </Link>
                <Link to='/inventory/other'>
                    <li>Other</li>
                    <hr />
                </Link>
            </ul>
        )
    }
}