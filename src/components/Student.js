import React, { Component } from 'react'
import "./student.css"

export default class Student extends Component {

    constructor(props){
        super(props);
        this.state = {
            score : this.props.score,
            success : false,
            failure : false,
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
                        failure : false,
                    })
                } else if(this.state.score > 340) {
                    this.setState({
                        failure : false,
                    })
                }
            }
        )
    }

    subtractScore(){
        this.setState({
            score : this.state.score -1,
        },
            () => {
                if(this.state.score < 350 && this.state.score >=340) {
                    this.setState({
                        success : false,
                    })
                } else if(this.state.score < 340) {
                    this.setState({
                        failure : true,
                    })
                }
            }
        )
    }

    render() {

        const isSuccess = this.state.success;
        const isFailure = this.state.failure;
        let text;
        if(isSuccess) {
            text = <span>Success</span>
        } else if(isFailure) {
            text = <h6>Failure</h6>
        } else {
            text = ''
        }

        return (
            <div className="student">
                <div className="left">
                    <h2 className="name">
                        {this.props.name}
                        <button className="addScore" onClick={() => this.addScore()} >+</button>
                        <button className="subtractScore" onClick={() => this.subtractScore()} >-</button>
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
