import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class WomenSub extends Component {
    render() {
        return (
            <ul>
                <Link to='/women/shoes'>
                    <li>Shoes</li>
                    <hr />
                </Link>
                <Link to='/women/tops'>
                    <li>Tops & T-Shirts</li>
                    <hr />
                </Link>
                <Link to='/women/pants'>
                    <li>Pants & Shorts</li>
                    <hr />
                </Link>
                <Link to='/women/hoodies'>
                    <li>Hoodies & Sweatshirts</li>
                    <hr />
                </Link>
                <Link to='/women/cleats'>
                    <li>Cleats</li>
                    <hr />
                </Link>
                <Link to='/women/other'>
                    <li>Other</li>
                    <hr />
                </Link>
            </ul>
        )
    }
}