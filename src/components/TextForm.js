import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleloClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }

    const handleClearText = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text has been Cleared", "success")
    }

    const handleCopy = () => {
        const textArea = document.getElementById("myBox");
        textArea.select();
        navigator.clipboard.writeText(textArea.value)
        props.showAlert("Copied to Clipboard", "success")
    };

    const handleemailText = () => {
        const words = text.split(' ');
        const validEmails = words.filter(word => {
          return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(word);
        });
        const validEmailsText = validEmails.join(' ');
        setText(validEmailsText);
      };

      const handlextraSpace = () => {
        const newText = text.split(/[ ] + /);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "success")
      };


    const handleChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter Text Here");

    return (
        <>
            <div className= "container" style = {{color: props.mode === 'dark' ? 'white': 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style = {{backgroundColor: props.mode === 'dark' ? 'grey': 'white', color: props.mode === 'dark' ? 'white': 'black' }}value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleemailText}>Extract Email</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handlextraSpace}>Remove Extra Spaces</button>

            </div>
            <div className={`container my-2 text-${props.mode === 'light' ? 'dark': 'light'}`}>
                <h2>Summary</h2>
                <ul>
                    <li>{text.trim().split(/\s+/).length} Words</li>
                    <li>{text.length} Characters with Spaces</li>
                    <li>{text.replace(/ /g, "").length} Characters without Spaces</li>
                    <li>{0.008 * text.split(" ").length} Minutes to read the text</li>
                </ul>
                <h2>Preview</h2>
                <div className="mb-3">
                    <textarea className="form-control" style = {{backgroundColor: props.mode === 'dark' ? 'grey': 'white', color: props.mode === 'dark' ? 'white': 'black' }}value= {text.length>0?text:"Enter some Text to Preview"} rows="8"></textarea>
                </div>
            </div>
        </>
    );
}

