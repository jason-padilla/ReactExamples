import React, {useState} from "react"
import './App.css';
import { Router } from '@reach/router';
import PersonCard from './components/Person';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import UserResults from './components/UserResults';
import MessageForm from './components/MessageForm';
import DisplayMsg from './components/DisplayMsg';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';
import Tabs from './components/Tabs';
import Select from './components/Select';
import ToDo from './components/Todolist';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import PokeApi from './components/PokeApi';
import PageTwo from './components/PageTwo';
import PageOne from './components/PageOne';

import MyContext from './context/MyContext';

function App() {

  function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
  }

  function fiveHeads() {
    return new Promise( (resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
      }
      resolve(`It took ${attempts} tries to flip five "heads"`);
      reject("something wrong");
    });
  }
  fiveHeads()
      .then( res => console.log(res) )
      .catch( err => console.log(err) );
  console.log( "When does this run now?" );

  const [userState, setUserState] = useState({firstName: "", lastName: "", email: "", password: ""});
  const [msgState, setMsgState ] = useState("");
  const [boxesState, setBoxesState ] = useState([]);
  const [contextVal, setContextVal] = useState("jason");

  return (
    <div className="App">
      {/* Drop down options, onSubmit console.logs the result  */}
      <Select/>
      <hr/>
      {/* Each tab has an individual message, when either is clicked it shows the message in a textarea */}
      <Tabs tabItems= {[
          {name:"tab1",content:"Tab 1 content is showing here."},
          {name:"tab2",content:"Tab 2 content is showing here."},
          {name:"tab3",content:"Tab 3 content is showing here."}
      ]}/>
      <hr/>
      {/* When filling out the inputs it dynamically changes the values to the dedicated labels */}
      <UserForm inputs={userState} setInputs={setUserState}/>
      <UserResults data={userState}/>
      <hr/>
      {/* Everytime the counter button is clicked it increases the counter */}
      <Counter/>
      <hr/>
      {/* An example of how to reuse a component with prop values */}
      <PersonCard firstName="Jane" lastName="Doe" age={ 45 } hairColor="Black" /> 
      <PersonCard firstName="John" lastName="Smith" age={ 88 } hairColor="Brown" /> 
      <hr/>
      {/* Submiting a message from a textarea will change the message in DisplayMsg */}
      <MessageForm message={msgState} setMessage={setMsgState}/>
      <DisplayMsg message={msgState}/>
      <hr/>
      {/* Submitting the BoxForm will add a box with the inputted color to BoxDisplay */}
      <BoxForm boxes={boxesState} setBoxes={setBoxesState}/>
      <BoxDisplay boxes={boxesState}/>
      <hr/>
      {/* OnSubmit will add a task to the ToDoList */}
      {/* Each item can be scratched off or deleted */}
      <ToDo/>
      <hr/>
      {/* Example of how we can have a global value without having to pass it down through props */}
      <MyContext.Provider value={{contextVal, setContextVal}}>
      <Wrapper>
        <Navbar/>
        <FormWrapper/>
      </Wrapper>
      </MyContext.Provider>
      <hr/>
      {/* Exercise to retrieve values from an API  */}
      <PokeApi/>
      <hr/>
      {/* A way to create routing in SPA */}
      <Router>
        <PageTwo path="/route-two"/>
        <PageOne path="/route-one"/>
      </Router>
    </div>
  );
}

export default App;

