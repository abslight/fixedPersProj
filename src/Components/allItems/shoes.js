import React, { Component } from 'react'
import axios from 'axios'
import Item from '../Item/Item'

export default class Shoes extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        axios.get('/api/inventory/shoes').then(res => {
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
                {inventory}
            </div>
        )
    }
}