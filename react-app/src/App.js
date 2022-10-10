import logo from './logo.svg';
import './App.css';

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
    
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
            <div class="source_part">
                <h3 class="bold_source_word part1"><span>1</span></h3>
                <h3 class="bold_source_word part2"><span>Presbo</span></h3>
                <h3 class="light_source_word"><span>presbo@columbia.edu</span></h3>
                <button class="delete_source_button"><span>DELETE</span></button>
            </div>

            <div class="source_part">
                <h3 class="bold_source_word part1"><span>2</span></h3>
                <h3 class="bold_source_word part2"><span>John Jay Mouse</span></h3>
                <h3 class="light_source_word"><span>mouse@columbia.edu</span></h3>
                <button class="delete_source_button"><span>DELETE</span></button>
            </div>

            <div class="source_part">
                <h3 class="bold_source_word part1"><span>1</span></h3>
                <h3 class="bold_source_word part2"><span>Water Bottle Man</span></h3>
                <h3 class="light_source_word"><span>flipper@columbia.edu</span></h3>
                <button class="delete_source_button"><span>DELETE</span></button>
            </div>
        </div>


        </body>
>>>>>>> Stashed changes
  );
}

export default App;
