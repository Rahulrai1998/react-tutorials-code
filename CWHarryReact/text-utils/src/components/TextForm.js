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
    <div className="form-group">
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
        setText(text.toUpperCase())

        }}
      >
        {/* {set}
          {btnText} */}
        HIT ME HARDER
      </button>
    </div>
  );
}
