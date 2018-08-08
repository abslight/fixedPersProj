import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MenSub extends Component {
    render() {
        return (
            <ul>
                <Link to='/men/shoes'>
                    <li>Shoes</li>
                    <hr />
                </Link>
                <Link to='/men/tops'>
                    <li>Tops & T-Shirts</li>
                    <hr />
                </Link>
                <Link to='/men/pants'>
                    <li>Pants & Shorts</li>
                    <hr />
                </Link>
                <Link to='/men/hoodies'>
                    <li>Hoodies & Sweatshirts</li>
                    <hr />
                </Link>
                <Link to='/men/cleats'>
                    <li>Cleats</li>
                    <hr />
                </Link>
                <Link to='/men/other'>
                    <li>Other</li>
                    <hr />
                </Link>
            </ul>
        )
    }
}