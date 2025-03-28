export default function UserInput({userInput, onChange}){
    
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input id="initialInvestment"
                           type="number" 
                           onChange={(event)=>{onChange('initialInvestment',event.target.value)}}
                           value = {userInput.initialInvestment} 
                           required />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input id="annualInvestment" 
                           type="number" 
                           onChange={(event)=>{onChange('annualInvestment',event.target.value)}}
                           value = {userInput.annualInvestment} 
                           required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input id="expectedReturn"
                           type="number"
                           onChange={(event)=>{onChange('expectedReturn',event.target.value)}}
                           value = {userInput.expectedReturn}
                           required/>
                </p>
                <p>
                    <label>Duration</label>
                    <input id="duration"
                           type="number" 
                           onChange={(event)=>{onChange('duration',event.target.value)}}
                           value = {userInput.duration} 
                           required/>
                </p>
            </div>
        </section>
    )
}