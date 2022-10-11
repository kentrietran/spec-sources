import logo from './logo.svg';
import Form from './Form';
import './App.css';

function App() {
  return (
    
        <body>
        <img class="image" src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png" alt="spec image"/>
        <center>
        <div class="title">
            <p class="title-name">Spectator's Sources</p>
        </div>

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
        </center>

        {/*DO NOT CROSS THIS LINE*/}
        <div class="botton_body">
            <Form></Form>
        </div>


        </body>

  );
}

export default App;
