import React from "react";
import { useState } from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const SummaryForm = () => {
  const [disable, setDisable] = useState(true);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actualy be delivered</Popover.Body>
    </Popover>
  );
  return (
    <div>
      <OverlayTrigger placement="right" overlay={popover}>
        <span>
          <label htmlFor="termsAndConditions">
            I agree to Terms and Conditions
          </label>
          <input
            onChange={() => setDisable(!disable)}
            id="termsAndConditions"
            type="checkbox"
          />
        </span>
      </OverlayTrigger>
      <button disabled={disable}>Confirm order</button>
    </div>
  );
};

export default SummaryForm;
