//import logo from './logo.svg';
import List from './List';
import Form from './Form';
import './App.css';
import React, {useState} from 'react';

const initialList = [{name: "Presbo", email: "presbo@columbia.edu"},
    {name: "John Jay Mouse", email: "mouse@columbia.edu"},
    {name: "Water Bottle Man", email: "flipper@columbia.edu"}]

function App() {
    const [sourceList, setSourceList] = useState(initialList)

    function handleDelete(sourceIndex) {
        const updatedList = sourceList.slice(0, sourceIndex).concat(sourceList.slice(sourceIndex + 1));
        setSourceList(updatedList);
    }

    function handleAdd(sourceName, sourceEmail) {
        const updatedList = [...sourceList, {name: sourceName, email: sourceEmail}];

        setSourceList(updatedList);
    }

    return (
        <body>
        <img class="image" src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png" alt="spec"/>
        <center>
        <div class="title">
            <p class="title-name">Spectator's Sources</p>
        </div>
            <Form handleAdd={handleAdd}></Form>
        
        </center>

        {/*DO NOT CROSS THIS LINE*/}
        <div class="botton_body">
            <List sourceList={sourceList} handleDelete={handleDelete}></List>
        </div>
        </body>

  );
}

export default App;