import React, { Component } from 'react'
import "./student.css"

export default class Student extends Component {

    constructor(props){
        super(props);
        this.state = {
            score : this.props.score,
            success : false,
        }
    }

    addScore(){
        this.setState({
            score : this.state.score +1,
        },
            () => {
                if(this.state.score >= 350) {
                    this.setState({
                        success : true,
                    })
                }
            }
        )
    }

    render() {

        const isSuccess = this.state.success;
        let text;
        isSuccess ? text=<span>Success</span> : text = "";

        return (
            <div className="student">
                <div className="left">
                    <h2 className="name">
                        {this.props.name}
                        <button className="addScore" onClick={() => this.addScore()} >+</button>
                    </h2>
                    
                    <p className="univerityName">{this.props.university} {text}</p>
                </div>
                <div className="right">
                    <div className="score">
                        {this.state.score}
                    </div>
                </div>
            </div>
        )
    }
}
