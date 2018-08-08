import React, { Component } from 'react'
import axios from 'axios'
import Item from '../Item/Item'

export default class Men extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        axios.get('/api/inventory/men').then(res => {
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
                <h1>Men</h1>
                <div>
                    {inventory}
                </div>
            </div>
        )
    }
}