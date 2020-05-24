import React from "react";
import {useState, useEffect } from 'react'
import "./App.css";
// import Ruler from "./Ruler";
import emmet from "emmet";


function checkFormat(param) {
  let count = 0;
  for (let index = 0; index < param.length; index++) {
      if (param[index] === '[' || param[index] === ']') {
          count++;
      }
  }
  if (count === 2) {
      return true
  } else return false;
}

function parser(param) {
  if (checkFormat(param)) {
      var emmetString = () => {
          let el;
          let classes;
          for (let index = 0; index < param.length; index++) {
              if (param[index] === '[') {
                  el = param.slice(0, index);
                  classes = param.slice(index + 1, -1).split(",");
              }
          }
          classes.forEach(element => {
              el = el + "." + element;
          });
          return el;
      }
      var htmlString = emmet(emmetString());
      return htmlString;
  } else return param;
}






function App() {

  const [textArea, setTextArea] = useState('');

  const handleTextArea = (e) => {
    setTextArea(e.target.value);
  }

  const parseText = () => {
    setTextArea(parser(textArea));
  }

  const handleKeyDown = (e) => {
    if (e.which === 9) {
      e.preventDefault();
      console.log(textArea);
      parseText();
    } else if (e.which === 219) {
      e.preventDefault();
      setTextArea(textArea + '[]');
      document.getElementById('code').selectionEnd--;
    } 
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
  });

  return (
    <div className="App">
      <h2>Code Editor</h2>
      <textarea id='code' rows='8' style={{width: '50vw', margin: '50px', height: '50vh'}} value={textArea} onChange={(e) => handleTextArea(e)}/>
    </div>
  );
}

export default App;
