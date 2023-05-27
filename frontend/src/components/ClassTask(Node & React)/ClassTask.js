import React, { useState } from "react";
import axios from "axios";


const ClassTask=()=>
{
    const [data,setdata]=useState(0);
    const [numtwo,settwo]= useState(0)


    const storevalue=(e)=>
    {
        var one = e.target.value;
        var two = e.target.name;

        if(two==="num2")
            settwo(one);
        else
            setdata(one);
    }
   

    const handlerclick=(e)=>
    {
        /*
        var one = e.target.value;
        var two = e.target.name;
        setdata(...data,data[two]=value);*/

        var names=e.target.name;
         axios .get('http://localhost:3000/${names}?num1=${data}&num2=${numtwo}').then((res)=>
        
        {
            console.log(res.data);
            setdata(res.data);
        }).catch((err)=>
        {
            console.log(err);
        })
    }
    return(
        <div>
            <label>Num1</label>
            <input  type="text" name="num1" placeholder="Num1" onChange={(e)=>storevalue}/>
            <label>Num2</label>
            <input type="text" placeholder="Num2" name="num2" onChange={(e)=>storevalue} />
          
            
            <button name="add" onClick={(e)=>handlerclick}>add</button>
            <button name="multiply" onClick={(e)=>handlerclick}>Mul</button>
        </div>

    );


}

export default ClassTask;
