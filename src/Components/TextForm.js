import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UPPERCASE!", "primary")    
    }

    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "warning")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("Textbox cleared!", "danger")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard.", "info")
    }

    const handleSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra spaces removed.", "dark")
    }


    const [text, setText] = useState("Enter text here.");
    return (
        <>

                <div className={`container my-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <h1>Enter the text to analyse below.</h1>
                    <div className="mb-3 my-2">
                        <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'}`} id="myBox" value={text} onChange={handleOnChange} rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#585252' }}></textarea>
                    </div>
                    <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'outline-secondary' : 'outline-dark text-light'} my-1`} onClick={handleUpClick}>Convert to uppercase</button>
                    <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'outline-secondary' : 'outline-dark text-light'} mx-1 my-1`} onClick={handleLowClick}>Convert to lowercase</button>
                    <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'outline-secondary' : 'outline-dark text-light'} my-1`} onClick={handleClearClick}>Clear text</button>
                    <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'outline-secondary' : 'outline-dark text-light'} mx-1 my-1`} onClick={handleSpaces}>Remove Extra Spaces</button>
                    <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'outline-secondary' : 'outline-dark text-light'} my-1`} onClick={handleCopy}>Copy text</button>

                </div>

                <div className={`container my-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <h2>Your text summary.</h2>
                    <p>{text.length} characters and {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words.</p>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length * 0.008} minutes required to read.</p>
                    <h3>Preview</h3>
                    <p>{text.length > 0 ? text : "Nothing to preview."}</p>
                </div>
        </>
    )
}
