import React, { Component } from 'react'
import axios from 'axios'
import Item from '../Item/Item'

export default class WomenPants extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        axios.get('/api/inventory/women/pants').then(res => {
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
                // name={item.name}
                // imageURL={item.imageURL}
                // price={item.price}
                // stock={item.stock}
                // cat={item.cat} 

            )
        }
        )
        return (
            <div>
                <h1>Women's Pants & Shorts</h1>
                <div>
                    {inventory}
                </div>
            </div>
        )
    }
}