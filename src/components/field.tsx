import * as React from "react";

export default ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) =>
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
                ((error && <span style={{color: "red"}}>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    </div>