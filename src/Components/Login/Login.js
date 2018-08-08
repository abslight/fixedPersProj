import React, { Component } from 'react'
import axios from 'axios'
import './Login.css'
import Swoosh from './1200px-Logo_NIKE.svg.png'
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/reducer';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userid: 0,
            email: '',
            password: '',
            error: '',
            loggedIn: ''
        }
    }

    login() {
        const { userid, email, password } = this.state
        if (email && password) {
            axios.post('/api/login', { userid, email, password }).then(res => {
                console.log(res.data)
                if (res.data.length !== 0) {
                    // this.setState({ error: '' })
                    this.setState({ loggedIn: 'You logged in successfully!', error: '' })
                    this.props.updateUser(res.data)

                    this.props.history.push('/')
                }
            })
        } else {
            this.setState({ error: 'Please fill in both fields' })
        }
    }

    register() {
        const { userid, email, password } = this.state
        if (email && password) {
            axios.post('/api/register', { userid, email, password }).then(res => {
                if (res.data.length !== 0) {
                    console.log(res.data)
                    // this.setState({ error: res.data })
                    this.setState({ loggedIn: 'You are now registered and have logged in successfully!', error: '' })
                    this.props.updateUser(res.data)

                    this.props.history.push('/')
                }
            })
        } else {
            this.setState({ error: 'Please fill in both fields' })
        }
    }

    render() {
        return (
            <div className="logReg">
                <div id='card'>
                    <img id='logswoosh' src={Swoosh} alt="Nike Swoosh" />
                    <h3>Email</h3>
                    <input onChange={e => this.setState({ email: e.target.value })} />
                    <h3>Password</h3>
                    <input onChange={e => this.setState({ password: e.target.value })} type='password' />
                    <br /><br />
                    <button onClick={() => this.login()}>Login</button>
                    <button onClick={() => this.register()}>Register</button>
                    <br />
                    <h4>{this.state.error}</h4>
                    <h2>{this.state.loggedIn}</h2>
                </div>
            </div>
        );
    }
}

export default connect(null, { updateUser })(Login)