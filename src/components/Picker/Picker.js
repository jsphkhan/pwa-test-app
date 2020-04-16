import React from 'react';
import "./Picker.css";

/** 
 * Its a simple component
 * Test if conditional rendering of this component downloads the CSS at runtime
*/
const Picker = () => {
    return (
        <div className="picker">
            <h1>I am a Picker component</h1>
        </div>
    );
}

export default Picker;