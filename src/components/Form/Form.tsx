import React, { FormEvent, ReactNode } from "react";
import "./index.css";

interface FormProps {
  title?: string | ReactNode;
  subTitle?: string | ReactNode;
  children: ReactNode;
  onSubmit: (event: any) => void;
  submitLabel: string;
  className: string;
  buttonDisabled?: boolean;
}

export default function Form(props: FormProps) {
  return (
    <div className={`form ${props.className ?? ""}`}>
      {props.title && <h2 className="formTitle">{props.title}</h2>}
      {props.subTitle && <h3 className="formSubtitle">{props.subTitle}</h3>}
      {/* <form onSubmit={props.onSubmit}>
				{props.children}
				<input
					disabled={props.buttonDisabled ?? false}
					className={`formSubmitButton ${
						props.buttonDisabled ? "disabled" : ""
					}`}
					type="submit"
					value={props.submitLabel}
				/>
			</form> */}
      <button
        onClick={props.onSubmit}
        className={`formSubmitButton ${props.buttonDisabled ? "disabled" : ""}`}
        type="submit"
      >
        {props.submitLabel}
      </button>
    </div>
  );
}
