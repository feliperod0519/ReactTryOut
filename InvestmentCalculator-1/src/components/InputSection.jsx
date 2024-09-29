import { useState } from 'react';
import Grid from './Grid';

export default function InputSection() {

    const [data, setData] = useState({initialInvestment:1000, annualInvestment:2000, expectedResult:6, duration:10});
    
    let isValid = true;

    function handleInput(e){
        const InputType = ['initialInvestment', 'annualInvestment', 'expectedResult', 'duration' ];
        let indx = -1;
        switch (e.target.id)
        {
            case "txtII":
                indx = 0;    
                break;
            case "txtAI":
                indx = 1;    
                break;
            case "txtER":
                indx = 2;    
                break;
            case "txtD":
                indx = 3;    
                break;
            default:
                indx = 0;
                break;
        };
        if (indx === 3 && e.target.value < 1)
        {
            isValid = !isValid;
            console.log(isValid);
        }
        if (isValid)
            setData(i=>{ return {...i, [InputType[indx]]: e.target.value}});
        else
            setData(i=>{ return {...i, duration: 10}});
        {/*
            i is previous state
            ['property'] notation is used to update the state 
        */}
    }
    
    return (<article className="card">
                <section id="user-input">
                    <h2>Enter your investment details:</h2>
                    <div className="input-group">
                        <p>
                            <label>Initial Investment</label>
                            <input id="txtII" type="number" required  
                                   onChange={handleInput} value={data.initialInvestment}></input>
                        </p>
                        <p>
                            <label>Annual Investment</label>
                            <input id="txtAI" type="number" required 
                                   onChange={handleInput} value={data.annualInvestment}></input>
                            {/* <!--
                              <input type="number" required onChange={(event)=>handleInput('initialInvestment',event.target.value)}></input>
                            --> */}
                        </p>
                    </div>
                    <div className="input-group">
                        <p>
                            <label>Expected Return</label>
                            <input id="txtER" type="number" required 
                                   onChange={handleInput} value={data.expectedResult} />
                        </p>
                        <p>
                            <label>Duration</label>
                            <input id="txtD" type="number" required 
                                   onChange={handleInput} value={data.duration} />
                            {!isValid && <span style={{color: 'red'}}>Duration should be greater than 0</span>}
                        </p>
                    </div>
                </section>
                <Grid initialInvestment={data.initialInvestment}
                      annualInvestment={data.annualInvestment}
                      expectedResult={data.expectedResult}
                      duration={data.duration}/>
            </article>)
}