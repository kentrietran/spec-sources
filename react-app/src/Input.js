import "./App.css";

function Input() {
    return (
        <div >
            <form class="sourceBubble">
                <div class="source_element">
                    <label class="source_title">Source Name:</label>
                    <input class="source_input" type="text" id="sname" name="sname"/>
                </div>
                <div class="source_element">
                    <label class="source_title">Source Email:</label>
                    <input class="source_input" type="text" id="semail" name="semail"/>
                </div>
                <div class="source_element">
                    <input class="source_button" type="submit" value="ADD"/>
                </div>
            </form>
        </div>
    )
}

export default Input;