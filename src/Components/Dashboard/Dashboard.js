import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import NikePlus from './nikeplus.png'
import './Dashboard.css'
import fyg from './Fyg.jpg'
import KD from './KD.jpg'
import uni from './bballuni.jpg'
import wnba from './Fbball.jpg'
import Link from 'react-router-dom'


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div id='main'>
                    <div id='carousel'>
                        <Carousel indicators={false}>
                            <Carousel.Item>
                                <div id='parent'>
                                    <p>$5 TWO DAY SHIPPING NOW AVAILABLE</p>
                                    <p id='details'><ul>See Details</ul></p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div id='parent'>
                                    <p>30 DAY FREE RETURNS</p>
                                    <p>Wear it, test it, keep what you like.</p>
                                    <p id='details'><ul>See Details</ul></p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div id='parent'>
                                    <img src={NikePlus} alt="" />
                                    <p>DOWNLOAD THE APP</p>
                                    <p id='details'><ul>See Details</ul></p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div >
                        <div id='cont'>
                            <video autoPlay muted loop id="dashVid">
                                <source src='https://nikevideo.nike.com/72451143001/201806/3957/72451143001_5801670897001_5801669626001.mp4' type="video/mp4" />
                            </video>
                            <div className="vidContent">
                                <h1>THIS JUST IN</h1>
                                <br />
                                <p>For chilling out. For keeping cool. Come see what's new this summer.</p>
                                <br />
                                {/* <Link to='/men'> */}
                                <button id="toMen" onClick={() => this.props.history.push('/men')}>SHOP MEN</button>
                                {/* </Link> */}
                                {/* <Link to='/women'> */}
                                <button id="toWomen" onClick={() => this.props.history.push('/women')}>SHOP WOMEN</button>
                                {/* </Link> */}
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <img id='fyg' src={fyg} alt="Find Your Greatness" />
                </div>
                <br />
                <div>
                    <h1 id='attireHead'> Team USA Official Basketball Uniform</h1>
                </div>
                <br />
                <div className='threeimgs'>
                    <div>
                        <img className='left pic' src={KD} alt="Team USA HyperDunks" />
                    </div>
                    <div>
                        <img className='mid pic' src={uni} alt="Team USA Uniforms" />
                    </div>
                    <div>
                        <img className='right pic' src={wnba} alt="Team USA Jackets" />
                    </div>
                </div>

            </div>
        )
    }
}
