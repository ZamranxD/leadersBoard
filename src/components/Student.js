import React, { Component } from 'react'
import "./student.css"

export default class Student extends Component {
    render() {
        return (
            <div className="student">
                <div className="left">
                    <h2 className="name">
                        {this.props.name}
                        <button className="addScore">+</button>
                    </h2>
                    
                    <p className="univerityName">{this.props.university}</p>
                </div>
                <div className="right">
                    <div className="score">
                        {this.props.score}
                    </div>
                </div>
            </div>
        )
    }
}
