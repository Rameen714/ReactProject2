import React from 'react';

class Events_Prac extends React.Component
{
    clickHandler()
    {
        console.log("Button Clicked");

    }
    inputHandler(){
        console.log("Input Changed");
        //a chnage
    }
    
    inputHandler2(event){
        console.log(event.target.value);
    }
    inputHandler3(event,name){
        console.log(event.target.value);
        console.log(name);
    }
    render(){
        return(
            <>
                <h1>Events</h1>
                <button onClick={this.clickHandler}>Click Me</button>
                <input onChange={this.inputHandler}></input>
                <input onChange={this.inputHandler2}></input>
                <input onChange={(e) => this.inputHandler3(e,'yo')}></input>
                
            </>   
        )
    }

}

export default Events_Prac;