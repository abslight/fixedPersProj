import React, { Component } from 'react'
import axios from 'axios'
import Item from '../Item/Item'
import './items.css'


export default class MenHoodies extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        axios.get('/api/inventory/men/hoodies').then(res => {
            this.setState({ items: res.data })
        })
    }
    render() {
        let inventory = this.state.items.map(element => {
            return (
                <div>
                    <Item
                        item={element}
                        key={element.id}
                    />
                </div>
            )
        }
        )
        return (
            <div>
                <h1 id='title'>MEN'S SWEATSHIRTS & HOODIES</h1>
                <div id='items'>
                    {inventory}
                </div>
            </div>
        )
    }
}