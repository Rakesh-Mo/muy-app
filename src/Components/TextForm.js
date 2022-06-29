import React,{useState} from 'react'

export default function (props) {
    const handleOnChange=(event)=>{
        console.log("OnChange");
        setText(event.target.value);
       
    }

    const handleOnClick =()=>{
        console.log("Uppercase was clicked");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","Success")
    }

    const handleOnClick1=()=>{
      let newText1=text.toLowerCase();
      setText(newText1);
      props.showAlert("Converted to Lowercase!","Success")
    }

    const handleOnClick2 =()=>{

      let newText2=" ";
      setText(newText2);
      props.showAlert("Converted to ClearText!","Success")

    }

    const handleOnClick3=()=>{

      var text = document.getElementById('box');

      text.select();

      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!","Success")
    }

    const handleOnClick4=()=>{

      let newText= text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed!","Success")
    }
    const [text, setText] = useState("")
  return (
    <>
    <div className='container'><br></br>
        <h1 style={{color:props.mode ==='dark'?'white':'black'}}>{props.heading}</h1>
      
  <div className="mb-3">

    <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'white':'white' ,color :props.mode ==='dark'?'black':'black'}} value={text} id="box" rows="8"></textarea>
  </div>
  <button className='btn btn-primary mx-2' onClick={handleOnClick}>Convert To Uppercase</button>
  <button className='btn btn-danger mx-2' onClick={handleOnClick1}>Convert To Lowercase</button>
  <button className='btn btn-success mx-2' onClick={handleOnClick2}>Clear Text</button>
  <button className='btn btn-secondary mx-2' onClick={handleOnClick3}>Copy Text</button>
  <button className='btn btn-warning mx-2' onClick={handleOnClick4}>Remove Extra Spaces</button>
  </div>


<div className="container my-3">
<h2 style={{color:props.mode ==='dark'?'white':'black'}}>Your Text Summary</h2>
<p style={{color:props.mode ==='dark'?'white':'black'}}>{text.split(" ").length} words and {text.length} characters</p>
<h2 style={{color:props.mode ==='dark'?'white':'black'}}>Preview</h2>
<p  style={{color:props.mode ==='dark'?'white':'black'}}>{text.length>0?text:"Enter something in the textbox above to preivew it here"}</p>

</div>

  </>
  )
}
