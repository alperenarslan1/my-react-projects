function UserInput({ handleChange, investmentValues }) {
   return (
      <section id="user-input">
         <div className="input-group">
            <p>
               <label>initial Investment</label>
               <input
                  value={investmentValues.initialInvestment}
                  required
                  onChange={(e) => handleChange("initialInvestment", e.target.value)}
                  type="number"
               />
            </p>
            <p>
               <label>Annual Investment</label>
               <input
                  value={investmentValues.annualInvestment}
                  type="number"
                  required
                  onChange={(e) => handleChange("annualInvestment", e.target.value)}
               />
            </p>
         </div>

         <div className="input-group">
            <p>
               <label>Expected Return</label>
               <input
                  value={investmentValues.expectedReturn}
                  type="number"
                  required
                  onChange={(e) => handleChange("expectedReturn", e.target.value)}
               />
            </p>
            <p>
               <label>Duration</label>
               <input
                  value={investmentValues.duration}
                  type="number"
                  required
                  onChange={(e) => handleChange("duration", e.target.value)}
               />
            </p>
         </div>
      </section>
   );
}
export default UserInput;
