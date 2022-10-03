import React, { useState } from "react";
import Preview from "./Preview";
function Textform(props) {
    const [text, setText] = useState("");
    const NameCase = () => {
        let a = text.split(' ');
        let nam = '';
        for (let i = 0; i < a.length; i++) {
            let [...x] = a[i];
            x[0] = a[i].charAt(0).toUpperCase();
            nam += x.join('');
            nam += ' ';
        }
        setText(nam);
        props.showMessage('Converted to NameCase', 'success');
    }
    const UpperCase = () => {
        setText(text.toUpperCase());
        props.showMessage('Converted to UpperCase', 'success');
    }
    const LowerCase = () => {
        setText(text.toLowerCase());
        props.showMessage('Converted to LowerCase', 'success');
    }
    const CountSpace = (y) => {
        let count = 0;
        y.forEach(element => {
            if (element === '') {
                count++;
            }
        });
        return count;
    }
    const handleOnChange = (e) => {
        let x = e.target.value;
        let y = x.split(' ');
        const Character = document.querySelector('.Character');
        const Words = document.querySelector('.Words');
        Character.textContent = x.length;
        Words.textContent = y.length - CountSpace(y);
        setText(e.target.value);
    }
    return (
        <>
            <div>
                <div className="mb-3">
                    <h1 >{props.name}</h1>
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} ></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={UpperCase}>To Uppercase</button>
                <button type="button" className="btn btn-success m-3" onClick={LowerCase}>To Lowercase</button>
                <button type="button" className="btn btn-warning" onClick={NameCase}>To NameCase</button>
            </div>
            <div className={`h4 pb-2 mb-4 mt-4 text-danger border-bottom border-danger text-${props.mode === 'light' ? 'blue' : 'light'}`}>
                Characters<p className="Character">0</p> <br></br> Words <p className="Words">0</p>
            </div>
            <Preview val={text}></Preview>
        </>
    );
}

export default Textform;

