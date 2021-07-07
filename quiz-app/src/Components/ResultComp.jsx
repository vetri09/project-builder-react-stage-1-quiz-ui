import React, { Component } from 'react'
import './ResultComp.css'

export default class ResultComp extends Component {
    render() {
        return (
            <div className="result">
                <div className="result-display">
                    <div className="result-correct">
                    </div>
                    <p className="result-text">Result</p>
                </div>
                <div className="result-box">
                    <p className="result-info">You need more practice!</p>
                    <p className="result-score">Your Score: 20%</p>
                    <div className="result-details">
                        <div className="result-detail">
                            <p>Total number of questions</p>
                            <p>15</p>
                        </div>
                        <div className="result-detail">
                            <p>Number 0f attempted questions</p>
                            <p>9</p>
                        </div>
                        <div className="result-detail">
                            <p>Number of Correct Answers</p>
                            <p>3</p>
                        </div>
                        <div className="result-detail">
                            <p>Number of Wrong Answers</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div className="result-after">
                    <button className="result-play-btn">Play Again</button>
                    <button className="result-home-btn">Back to Home</button>
                </div>
            </div>
        )
    }
}
