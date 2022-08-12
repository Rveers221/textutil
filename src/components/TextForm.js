import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("upper case was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase","success");
    }
    const handleLoClick = ()=>{
        console.log("lower case was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }
    const handleCopy = ()=>{
        console.log("i am copy");
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Coppied Successfully","success");
    }
// This function will track more then one spaces then copy them into newText then repalce those space with single space
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("All extra spaces removed successfuly","success");
    }
    const handleClearClick = ()=>{
        console.log("lower case was clicked"+text);
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared successfully","success");
    }
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here2');
    // text = "new Text"; // Wrong way to change the state
    // settext("new Text"); // correct way to change the state
    return (
        <>
        <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light' ? 'white' : '#a8b7c7',color:props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear the text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Your text summary</h1>
            <p>{text == "" ?0:text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes need to read</p>
            <h2>Preview</h2>
             <p>{text.length>0?text:"Enter something in text box above to preview it here"}</p>
        </div>
        </>
    )
}
