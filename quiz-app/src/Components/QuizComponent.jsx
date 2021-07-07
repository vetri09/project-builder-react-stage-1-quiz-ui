import React, { Component } from 'react'
import './QuizComponent.css'

export default class QuizComponent extends Component {
    render() {
        return (
            <div className="quiz-container">
                <div className="quiz-box">
                    <h1 className="quiz-heading">Question</h1>
                    <p className="quiz-question">Which is the only mammal that can't jump?</p>
                    <div className="quiz-choices">
                        <button>Dog</button><button>Goat</button><button>Elephant</button><button>Lion</button>
                    </div>
                    <div className="quiz-changes">
                        <button className="blue">Previous</button><button className="green">Next</button><button className="red">Quit</button>
                    </div>
                </div>
            </div>
        )
    }
}