import React, {useState} from 'react'

export default function Main(props){

    const handleUpClick = () => {
        let new_text = text.toLocaleUpperCase();
        settext(new_text)
        
    }
    
    const handleDownClick = () => {
        let new_text = text.toLocaleLowerCase();
        settext(new_text)
    }

    const cleartext = () =>{
        let text = ""
        settext(text)
    }
    
    const copyText = () =>{
        var text = document.getElementById('myBox')
        text.select();
        text.setSelectionRange(0,999)
        navigator.clipboard.writeText(text.value);
    }

    const removeES =  () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        settext(newText) 
    }
    
    const handleOnChange = (event) => {
        console.log('Handle on Change')
        settext(event.target.value)
    }

    let textcss = {
        border: '1px solid black'
    }

    // let style = {
    //     height: '00px'
    // }
    const [text, settext] = useState('Enter text Here');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3 ">
                <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8" style={textcss}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-warning mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
            <button className="btn btn-danger mx-2" onClick={cleartext}>Clear Text</button>
            <button className="btn btn-dark mx-2" onClick={copyText}>Copy Text</button>
            <button className="btn btn-dark mx-2" onClick={removeES}>Remove Extra Spaces</button>
        </div>

        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(' ').length<0?"":text.split(' ').length} words and {text.length<=0?"": text.length} characters</p>
            <p>Reading time in minutes {(text.split(' ').length)*0.005}</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}