import React from "react";

export default class IndecisionAPP extends React.Component {
  state = {
    value: "",
    equal: false,
  };

  handleClick = (e) => {
    const input = e.target.textContent;
    if (this.state.equal == true) {
      this.setState(() => ({ value: "", equal: false }));
    }
    let newInput = "";
    if (input !== "c" && input !== "=") {
      if (input == "+" || input == "/" || input == "-" || input == "*") {
        newInput = " " + input + " ";
      }
      this.setState((prevState) => ({
        value: prevState.value.concat(newInput !== "" ? newInput : input),
      }));
    }
    if (input == "C") {
      this.setState(() => ({ value: "" }));
    }

    if (input == "=") {
      this.setState((prevState) => ({
        value: eval(prevState.value).toString(),
        equal: true,
      }));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Calculator WebApp</h1>
          <h3>Built during the 7 days 7 webApps Challange</h3>
        </div>

        <div className="buttons parent" onClick={this.handleClick}>
          <input
            type="text"
            className="input"
            value={this.state.value}
            onChange={(e) => {}}
          />
          <div>
            <span className="divide">
              <button className="btn">/</button>
            </span>
            <span className="divide">
              <button className="btn">*</button>
            </span>
            <span className="divide">
              <button className="del">C</button>
            </span>
          </div>
          <div>
            <span className="divide">
              <button className="btn">7</button>
            </span>
            <span className="divide">
              <button className="btn">8</button>
            </span>
            <span className="divide">
              <button className="btn">9</button>
            </span>
            <span className="divide">
              <button className="btn">-</button>
            </span>
          </div>
          <div>
            <span className="divide">
              <button className="btn">4</button>
            </span>
            <span className="divide">
              <button className="btn">5</button>
            </span>
            <span className="divide">
              <button className="btn">6</button>
            </span>
            <span className="divide">
              <button className="btn">+</button>
            </span>
          </div>
          <div className="">
            <span className="divide">
              <button className="btn">1</button>
            </span>
            <span className="divide">
              <button className="btn">2</button>
            </span>
            <span className="divide">
              <button className="btn">3</button>
            </span>
          </div>
          <div>
            <span className="divide">
              <button className="zero">0</button>
            </span>
            <span className="divide">
              <button className="btn">.</button>
            </span>
            <span className="divide">
              <button className="equal">=</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
