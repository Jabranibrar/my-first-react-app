import React, {useState, useEffect} from 'react'

export default function TextForm(props) {
   const handleUpclick = ()=>{
       let newText = text.toUpperCase();
       setText(newText);
   }
   const handleLoclick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
}

const handleClearclick = ()=>{
    let newText = ('');
    setText(newText);
}
const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select('');
    navigator.clipboard.writeText(text.value);
}
const handleExtraSpaces = ()=>{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "))
}
   const handleOnChange = (event)=>{
       setText(event.target.value);
   }

const [text, setText] = useState('')
    return (
        <>
        <div className="container-1">
            <div className="text-form">
                <h2>{props.heading}</h2>
                <textarea name="form-control" placeholder = 'Your text is here' onChange={handleOnChange} className="text-area" value={text} id="myBox" cols='120' rows='8'>

                </textarea>
            </div>
            <button className="btn btn-primary my-2" onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            

        </div>
        <div className="container-2">
            <h2>Your text summary</h2>
            <p><b>{text.split(" ").length} Words and {text.length} Characters</b></p>
            <p><b>{0.008 * text.split(' ').length } Mintes read</b></p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
