import React, { Component } from 'react'
import axios from 'axios'
import Item from '../Item/Item'
import './fullInv.css'

export default class FullInv extends Component {

    constructor() {
        super();
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        axios.get('/api/inventory').then(res => {
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
            <div className='item'>
                {inventory}
            </div>
        )
    }
}
