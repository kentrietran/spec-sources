//import logo from './logo.svg';
import List from './List';
import Input from './Input';
import './App.css';

function App() {
  return (
    
        <body>
        <img class="image" src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png" alt="spec"/>
        <center>
        <div class="title">
            <p class="title-name">Spectator's Sources</p>
        </div>
            <Input></Input>
        
        </center>

        {/*DO NOT CROSS THIS LINE*/}
        <div class="botton_body">
            <List></List>
        </div>
        </body>

  );
}

export default App;
