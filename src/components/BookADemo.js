import React from "react";
import { PopupWidget, PopupButton } from "react-calendly";


const BookADemo = () => {
    return (
        <div>


            <PopupButton
            
                
            
                url="https://calendly.com/aman-quazma"
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={document.getElementById("root")}
                text="Book a Demo"
            />



        </div>
    )
}

export default BookADemo
