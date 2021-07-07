import React, { Component } from 'react'
import './HomeComponent.css'

export default class HomeComponent extends Component {
    render() {
        return (
            <div className="home-box">
              <h1 className="home-heading">Quiz app</h1>
              <button className="home-play-btn">Play</button>
            </div>
        )
    }
}