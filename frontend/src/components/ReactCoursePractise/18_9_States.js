import React from "react";

class States extends React.Component
{

    state = {
        name: "",
        age: 0,
        gender: "",
        count: 0
    }

    inputHandler = (event) => {
        this.setState({
            name: event.target.value,

        })
    }

    clickHandler = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render(){
        return(
            <div>
                <h1>States</h1>
                Enter your Name:
                <input 
                    onChange={this.inputHandler}>
                </input>
                <button onClick={this.clickHandler}>Add one</button>
                {this.state.name}
                {this.state.count}
            </div>
        )
    }
    
}

export default States;