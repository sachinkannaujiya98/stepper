import React, { useContext } from "react";
import "./additional.css";

import { multiStepContext } from "../StepContext";
const Additional = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  console.log(userData);
  return (
    <div className="additional">
      <h4>By Email</h4>
      <div className="checkboxes">
        <div className="ckbox">
          <input
            type="checkbox"
            name="Active"
            value={userData["Active"]}
            onChange={(e) =>
              setUserData({ ...userData, comments: e.target.name })
            }
          />
          <strong>Comments</strong>
          <div className="span_tag">
            <span>Get ntifiy when someone pass comment</span>
          </div>
        </div>
        <div className="ckbox">
          <input
            type="checkbox"
            name="Active"
            value={userData["candidates"]}
            onChange={(e) =>
              setUserData({ ...userData, candidates: e.target.name })
            }
          />
          <strong>Candidates</strong>
          <div className="span_tag">
            <span>Get ntifiy when someone pass comment</span>
          </div>
        </div>
        <div className="ckbox">
          <input
            type="checkbox"
            name="Active"
            value={userData["offers"]}
            onChange={(e) =>
              setUserData({ ...userData, offers: e.target.name })
            }
          />
          <strong>Offers</strong>
          <div className="span_tag">
            <span>Get ntifiy when someone pass comment</span>
          </div>
        </div>
      </div>
      {/* radio-btn */}
      <div className="radio-btn ">
        <strong>push notification</strong>
        <br />
        <small>These are delivered by sms to your mobile</small>
        <div>
          <input
            name="notification"
            type="radio"
            value={userData["everything"]}
            onChange={(e) =>
              setUserData({ ...userData, everything: e.target.checked })
            }
          />
          <strong>everything</strong>
        </div>
        <div>
          <input
            name="notification"
            type="radio"
            value={userData["on_email"]}
            onChange={(e) =>
              setUserData({ ...userData, on_email: e.target.checked })
            }
          />
          <strong>same as on email</strong>
        </div>
        <div>
          <input
            type="radio"
            name="notification"
            value={userData["No_notification"]}
            onChange={(e) =>
              setUserData({ ...userData, No_notification: e.target.checked })
            }
          />
          <strong>No push notification</strong>
        </div>
        <div className="additional_btns">
          <div className="additional_btn">
            <button onClick={() => setStep(1)}>Back</button>
            <button onClick={() => setStep(3)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additional;
