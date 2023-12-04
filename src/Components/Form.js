import React,{useState} from 'react'

export default function Form(props) {
    const [text, setText] = useState('')
    const toUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "Success");
    }
    const toLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "Success");
    }
    const handleUpperCase = (event)=>{
        setText(event.target.value);
    }
    const handleCopy = () =>{
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied", "Success");
    }
    const HandleExtraSpace = ()=>{
        // let text = document.getElementById("exampleFormControlTextarea1");
        let newStr = text.replace(/\s+/g, ' ');
        setText(newStr);
        props.showAlert("Extra spaces removed", "Success");
    }
    return (
    <>
        <div className="container my-0" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Enter text here for Analysis</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text}
                onChange={handleUpperCase} style={{backgroundColor: props.mode==='dark'?'#0C2D48':'white',
                color: props.mode==='dark'?'white':'black'}} rows="8" ></textarea>
            </div>
            <button className="btn btn-primary my-3" onClick={toUpperCase}>Convert to Upper Case</button>
            <button className="btn btn-primary my-3 mx-2" onClick={toLowerCase}>Convert to Lower Case</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary my-3 mx-2" onClick={HandleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <div className="other_details" >
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>  
        </div>
    </>
  )
}
