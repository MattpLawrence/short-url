import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    (() => {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * 8));
      }
      let shortUrl = `https://localhost:3000/${result}`;

      props.addListItem({
        id: Math.random(Math.floor() * 1000),
        fullUrl: input,
        shortUrl: shortUrl,
      });
      setInput("");
    })();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <form className="frmUrl" onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <input
              type="text"
              placeholder="Add a URL to shorten..."
              value={input}
              name="text"
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>
          <div className=" col-md-3 below">
            <button className="btnSubmit btn btn-primary">Shorten Me</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
