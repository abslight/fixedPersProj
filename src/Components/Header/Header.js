import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Swoosh from './1200px-Logo_NIKE.svg.png'
import MenSub from '../MenSub/MenSub'
import WomenSub from '../WomenSub/WomenSub'
import AllSub from '../AllSub/AllSub'
import cart from './2000px-Shopping_cart_font_awesome.svg.png'


export default function Header() {
    
        return (
            <div id='fixed'>
                <div id='navbar'>
                    <Link to='/'>
                        <img id='swoosh' src={Swoosh} alt="Nike Swoosh" />
                    </Link>
                    <ul className='nav'>
                        <div className='dropdown'>
                            <Link to='/inventory'>
                                <li className='dropbtn'>ALL PRODUCTS</li>
                            </Link>
                            <div className='dropcont'>
                                <AllSub />
                            </div>
                        </div>
                        <div className='dropdown'>
                            <Link to='/men'>
                                <li className='dropbtn men'> MEN </li></Link>
                            <div className='dropcont'>
                                <MenSub />
                            </div>
                        </div>
                        <div className='dropdown'>
                            <Link to='/women'>
                                <li className='dropbtn'>WOMEN</li>
                                <div className='dropcont'>
                                    <WomenSub />
                                </div>
                            </Link>
                        </div>
                    </ul>
                    {/* <Link to='/kids'><h3>Kids</h3></Link> */}
                    <div>
                        <div className='logButton'>
                            <Link to='/login'>
                                <h1>Login/Register</h1>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className='cart'>
                            <Link to='/cart'><div>
                                <img id='cart' src={cart} alt="" />
                            </div></Link>
                        </div>
                        <div id='search'>
                            <input type="Search" />
                            {/* <button>Search</button> */}
                        </div>
                    </div>
                </div >
            </div>
        )
    }

