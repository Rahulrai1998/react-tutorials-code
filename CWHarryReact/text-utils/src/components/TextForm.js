import React, { useState } from "react";
let btnText = 0;
export default function TextForm(props) {
  const [set, setState] = useState(0);
  const [text, setText] = useState("Enter and Click Button");

  const style = {
    color: props.mode === "light" ? "inherit" : "white",
  };
  return (
    <>
      <div className="container" style={style}>
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
          style={{
            backgroundColor: props.mode == "light" ? "inherit" : "#3a3b3b",
            color: props.mode === "light" ? "inherit" : "white",
          }}
        ></textarea>
        <button
          className="btn btn-primary my-2"
          onClick={() => {
            //   setText(text);
            //   setState(set + 1);
            //   btnText += 1;
            // console.log(text)
            setText(text.toUpperCase());
            props.showAlert("Capitalized", "success");
          }}
        >
          {/* {set}
          {btnText} */}
          UPPERCASE
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
      <div className="container my-3" style={style}>
        <h3>Word Counter</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} minutes</p>

        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
