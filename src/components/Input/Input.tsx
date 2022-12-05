import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./index.css";
import HideIcon from "../../assets/Hide.svg";
import ShowIcon from "../../assets/See.svg";
import { FieldError } from "react-hook-form";

interface InputProps {
  placeholder?: string;
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  typeSwitch?: boolean;
  startAdronment?: any;
  noSpaces?: boolean;
  required?: boolean;
  disabled?: boolean;
  error?: FieldError;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  const [type, setType] = useState(props.type ?? "text");
  const { error } = props;
  return (
    <>
      {props.label && <p className="inputLabel">{props.label}</p>}
      <TextField
        required={props.required}
        name={props.name}
        type={type}
        disabled={props.disabled}
        InputProps={{
          endAdornment: props.typeSwitch && (
            <img
              onClick={() => setType(type === "password" ? "text" : "password")}
              src={type === "password" ? ShowIcon : HideIcon}
              alt="show"
              className="checkboxIcon"
            />
          ),
          startAdornment: props.startAdronment ?? undefined,
        }}
        onKeyDown={(event) => {
          if (event.key === " " && props.noSpaces) {
            event.preventDefault();
            return;
          }
        }}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {error?.type && <p className="inputError">{error.message}</p>}
    </>
  );
}
