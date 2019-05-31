import React from "react";
import "./SelectForm.scss";

const SelectForm = props => {
  return (
    <div className="form-group">
      {/* <label for={props.name}> {props.title} </label> */}
      <select
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        className="form-control"
      >
        <option className="option" value="">
          {props.placeholder}
        </option>
        {props.options.map(option => {
          return (
            <option
              className="option"
              key={option}
              value={option}
              label={option}
            >
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectForm;
