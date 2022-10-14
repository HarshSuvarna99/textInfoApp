import React, {useState} from "react";


export default function TextForm(props) {

  function handleOnUpClick(){
    // console.log('uppercase button is clicked');
     setText(text.toUpperCase())
  }

  function handleOnLowClick(){
    // console.log('uppercase button is clicked');
     setText(text.toLowerCase())
  }
  function handleonChange(event){
    // console.log('change is being made to text') 
    setText(event.target.value)
    }

  function handleClearClick(){
    setText("")
  }
  const [text, setText] = useState("")
  return (
    <>
    <div className="container">
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control my-4" placeholder="write something" value={text} onChange={handleonChange} id="myTextBox" rows="3"></textarea>
      </div>
      <button className="btn btn-primary" onClick= {handleOnUpClick}>Uppercase</button>
      <button className="btn btn-primary mx-2" onClick= {handleOnLowClick}>Lowercase</button>
      <button className="btn btn-primary mx-2"onClick={handleClearClick} >Clear</button>
    </div>
    <div className="container my-3">
      <h4>Your text summary</h4>
      <p>{text.split(" ").length} words and {text.length}</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
      </>
  );
}
