import React from "react";

const UserInput = ({ onChangeInput, userInputAsProp }) => {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="">Initial Investment</label>
            <input
              type="number"
              onChange={(event) =>
                onChangeInput("initialInvestment", event.target.value)
              }
              value={userInputAsProp.initialInvestment}
              required
            />
          </p>
          <p>
            <label htmlFor="">Annual Investment</label>
            <input
              type="number"
              onChange={(event) =>
                onChangeInput("annualInvestment", event.target.value)
              }
              value={userInputAsProp.annualInvestment}
              required
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="">Expected Return</label>
            <input
              type="number"
              onChange={(event) =>
                onChangeInput("expectedReturn", event.target.value)
              }
              value={userInputAsProp.expectedReturn}
              required
            />
          </p>
          <p>
            <label htmlFor="">Duration</label>
            <input
              type="number"
              onChange={(event) =>
                onChangeInput("duration", event.target.value)
              }
              value={userInputAsProp.duration}
              required
            />
          </p>
        </div>
      </section>
    </>
  );
};

export default UserInput;
