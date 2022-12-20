import React, { useState } from "react";
let btnText = 0;
export default function TextForm(props) {
  const [set, setState] = useState(0);
  const [text, setText] = useState("Enter and Click Button");

  //   const handleChange=()=> {
  //     setState(set + 1);
  //     // btnText+=1;

  //   const testText = "freeeeee"
  //   }
  return (
    <>
      <div className="container">
        <label htmlFor="myBox">{props.formHeading}</label>

        <textarea
          className="form-control"
          id="myBox"
          onChange={(e) => {
            //   console.log(e.target.value);
            setText(e.target.value);
          }}
          rows="6"
          value={text}
        ></textarea>
        <button
          className="btn btn-primary my-2"
          onClick={() => {
            //   setText(text);
            //   setState(set + 1);
            //   btnText += 1;
            // console.log(text)
            setText(text.toUpperCase());
          }}
        >
          {/* {set}
          {btnText} */}
          HIT ME HARDER
        </button>
        <button
          className="btn btn-secondary mx-3 my-2"
          onClick={() => {
            setText("");
          }}
        >
          Reset
        </button>
      </div>
      <div className="container my-3">
        <h3>Word Counter</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} minutes</p>

        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
