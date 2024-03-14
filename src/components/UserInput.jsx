function UserInput({onInput, investmentData}) {

  return(
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input 
            type="number" 
            required 
            value={investmentData.initialInvestment}
            onChange={(event) => onInput('initialInvestment', event.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input 
            type="number" 
            required
            value={investmentData.annualInvesstment}
            onChange={(event) => onInput('annualInvestment', event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input 
            type="number" 
            required
            value={investmentData.expectedReturn}
            onChange={(event) => onInput('expectedReturn', event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input 
            type="number" 
            required 
            value={investmentData.duration}
            onChange={(event) => onInput('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;