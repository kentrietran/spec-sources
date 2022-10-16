import "./App.css";
import React, {useState} from 'react';

function Form({handleAdd}) {
    
    const [sourceName, setSourceName] = useState("");
    const [sourceEmail, setSourceEmail] = useState("");
    
    return (
        <div >
            <form class="sourceBubble">
                <div class="source_element">
                    <label class="source_title">Source Name:</label>
                    <input class="source_input" type="text" id="sname" name="sname" onChange={(e) => setSourceName(e.target.value)}/>
                </div>
                {/*<div>{sourceName}</div>*/}
                <div class="source_element">
                    <label class="source_title">Source Email:</label>
                    <input class="source_input" type="text" id="semail" name="semail" onChange={(e) => setSourceEmail(e.target.value)}/>
                </div>
                <div class="source_element">
                    <button class="source_button" type="button" onClick={() => handleAdd(sourceName, sourceEmail)}>ADD</button>
                </div>
            </form>
        </div>
    )
}

export default Form;