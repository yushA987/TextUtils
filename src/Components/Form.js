import React,{useState} from 'react'

export default function Form(props) {
    const [text, setText] = useState('')
    const toUpperCase = () => {
        let newText = text.toUpperCase();
        if(newText == text){
            props.showAlert("Already in upper case", "Failed");
        }
        else{
            setText(newText);
            props.showAlert("Converted to upper case", "Success");
        }
    }
    const toLowerCase = () => {
        let newText = text.toLowerCase();
        if(newText == text){
            props.showAlert("Already in lower case", "Failed");
        }
        else{
            setText(newText);
            props.showAlert("Converted to lower case", "Success");
        }
    }
    const handleUpperCase = (event)=>{
        setText(event.target.value);
    }
    const handleCopy = () =>{
        let ntext = document.getElementById("exampleFormControlTextarea1");
        ntext.select();
        navigator.clipboard.writeText(text);
        // or  navigator.clipboard.writeText(ntext.value);
        props.showAlert("Text copied", "Success");
    }
    const clrText = ()=>{
        setText("");
        props.showAlert("Text cleared", "Success");
    }
    const HandleExtraSpace = ()=>{
        // let text = document.getElementById("exampleFormControlTextarea1");
        let newStr = text.replace(/\s+/g, ' ');
        if(newStr == text){
            props.showAlert("There are no extra spaces", "Failed");   
        }
        else{
            setText(newStr);
            props.showAlert("Extra spaces removed", "Success");
        }
    }
    const AddComma = () =>{
        let newStr = text.replace(/\s+/g, ',');
        let l = newStr.length - 1;
        while(newStr[l] == ','){
            l--;
        }
        let start = 0;
        while(newStr[start] == ','){
            start++;
        }
        newStr = newStr.substring(start, l+1);
        if(newStr == text){
            props.showAlert("Comma's already added", "Failed")
        }
        else{
            setText(newStr);
            props.showAlert("Commas Added", "Success");
        }
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
            <button disabled={text.length===0} className="btn btn-primary my-3" onClick={toUpperCase}>Convert to Upper Case</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={toLowerCase}>Convert to Lower Case</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={AddComma}>Add Commas</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={HandleExtraSpace}>Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={clrText}>Clear Text</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <div className="other_details" >
                <h2>Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            </div>  
        </div>
    </>
  )
}
