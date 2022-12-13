//import logo from './logo.svg';
import List from './List';
import Form from './Form';
import './App.css';
import React, {useState, useEffect} from 'react';


const initialList = []

function App() {
    const [sourceList, setSourceList] = useState(initialList)

    useEffect(() => {
        fetch("http://localhost:8080/api/sources",  {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.status >= 200 && response.status < 300) {
                return response;
            }
            throw response;
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setSourceList(json.data);
        })
        .catch(error => console.log(error))
    }, []);



    

    function handleDelete(sourceIndex) {
        const updatedList = sourceList.slice(0, sourceIndex).concat(sourceList.slice(sourceIndex + 1));
        setSourceList(updatedList);

        fetch("http://localhost:8080/api/delete_source/:id",  {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.status >= 200 && response.status < 300) {
                return response;
            }
            throw response;
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setSourceList(json.data);
        })
        .catch(error => console.log(error))
    }

    function handleAdd(sourceName, sourceEmail) {
        const updatedList = [...sourceList, {name: sourceName, email: sourceEmail}];

        fetch("http://localhost:8080/api/add_source",  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.status >= 200 && response.status < 300) {
                return response;
            }
            throw response;
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setSourceList(updatedList);
        })
        .catch(error => console.log(error))


        

        
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
