import React, { useContext } from "react";
import "./summury.css";
import { multiStepContext } from "../StepContext";
const Summury = () => {
  const { setStep, userData } = useContext(multiStepContext);

  return (
    <>
      <div className="summury">
        <strong>Application Information</strong>
        <br />
        <small>Personal details and Application</small>

        <div className="name_cntainer">
          <div className="details">
            <p>Name:-</p>
            <p>
              {userData.firstname} {userData.lastname}
            </p>
          </div>
          <div className="details">
            <p>Email:-</p>
            <p>{userData.email}</p>
          </div>
          <div className="details">
            <p>country:-</p>
            <p>{userData.country}</p>
          </div>
          <div className="details">
            <p>street:-</p>
            <p>{userData.streetaddress}</p>
          </div>
          <div className="details">
            <p>Comments:- </p>
            <p>{userData.comments}</p>
          </div>
          <div className="details">
            <p>candidates:- </p>
            <p>{userData.candidates}</p>
          </div>
          <div className="details">
            <p>Offers:-</p>
            <p>{userData.offers}</p>
          </div>

          <div className="summury_btns">
            <div className="summury_btn">
              <button onClick={() => setStep(2)}>Back</button>
              <button onClick={() => setStep(4)}>Finish</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summury;
