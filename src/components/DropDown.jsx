import React, { useState } from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "./ErrorMessage";

const variants = {
  outline: { black_900_19: "border border-black-900_19 border-solid" },
  fill: { white_A700: "bg-white-A700 text-black-900_7f" },
};
const shapes = { round: "rounded-md" };
const sizes = { xs: "pb-1.5 pt-1.5 px-2" };

const Dropdown = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      options = [],
      value,
      onChange,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <select
            ref={ref}
            className={`${className} bg-transparent border-0`}
            name={name}
            value={value}
            onChange={handleChange}
            {...restProps}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Dropdown.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  value: PropTypes.string,
  onChange: PropTypes.func,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["black_900_19", "white_A700"]),
};

export { Dropdown };
