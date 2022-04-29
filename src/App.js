import React, { useContext } from "react";
import "./app.css";
import { Stepper, Step, StepLabel } from "@mui/material";
import Personal from "./components/Personal";
import Additional from "./components/Additional";
import Summury from "./components/Summury";
import FinalPage from "./components/FinalPage";
import { multiStepContext } from "./StepContext";

const App = () => {
  const { currentStep } = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <Personal />;
      case 2:
        return <Additional />;
      case 3:
        return <Summury />;
      case 4:
        return <FinalPage />;

      default:
    }
  }
  return (
    <div>
      <div className={currentStep === 4 ? "hide" : "app"}>
        <Stepper activeStep={currentStep} alternativeLabel>
          <Step>
            <StepLabel>Personal info</StepLabel>
          </Step>
          <Step>
            <StepLabel>Additional info</StepLabel>
          </Step>
          <Step>
            <StepLabel>Summury</StepLabel>
          </Step>
        </Stepper>
      </div>
      <div>{showStep(currentStep)}</div>
    </div>
  );
};

export default App;
