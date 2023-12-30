import React from "react";
import { PopupButton } from "react-calendly";

const Cpp = ({ buttonText }) => {
  return (
    <div className="App">
      <PopupButton
        url="https://calendly.com/ramkumar_p/30min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text={buttonText}
      />
    </div>
  );
};

export default Cpp;
